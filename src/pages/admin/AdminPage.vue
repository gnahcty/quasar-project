<template>
  <div class="q-pa-md column q-gutter-y-xl">
    <q-table title="Reported comments" ref="tableRef" :rows="rows" :columns="columns" row-key="_id" selection="multiple"
      v-model:selected="selected" @selection="handleSelection" no-data-label="Nothing more to do for now" />
    <div class="flex flex-center">
      <q-btn push color="red" size="xl" label="Delete" class="round lilita" @click="deleteCmt" />
    </div>
  </div>
</template>

<script setup>
import { ref, toRaw, onMounted, nextTick } from 'vue'
import { apiAuth } from 'src/boot/axios'

const columns = [
  {
    name: '_id',
    required: true,
    label: '_id',
    align: 'left',
    field: '_id'
  },
  {
    name: 'reports',
    required: true,
    label: 'Reports',
    align: 'center',
    field: 'reports',
    sortable: true
  },
  { name: 'content', align: 'center', label: 'Content', field: 'content', sortable: true },
  { name: 'user', label: 'User', field: 'user', sortable: true },
  { name: 'createdAt', label: 'CreatedAt', field: 'createdAt', sortable: true }
]

const delRows = ref([])

const rows = ref([])

const tableRef = ref()
const selected = ref([])

const handleSelection = ({ rows, added, evt }) => {
  let storedSelectedRow
  // ignore selection change from header of not from a direct click event
  if (rows.length !== 1 || evt === void 0) {
    return
  }

  const oldSelectedRow = storedSelectedRow
  const [newSelectedRow] = rows
  const { ctrlKey, shiftKey } = evt

  if (shiftKey !== true) {
    storedSelectedRow = newSelectedRow
  }

  // wait for the default selection to be performed
  nextTick(() => {
    if (shiftKey === true) {
      const tableRows = tableRef.value.filteredSortedRows
      let firstIndex = tableRows.indexOf(oldSelectedRow)
      let lastIndex = tableRows.indexOf(newSelectedRow)

      if (firstIndex < 0) {
        firstIndex = 0
      }

      if (firstIndex > lastIndex) {
        [firstIndex, lastIndex] = [lastIndex, firstIndex]
      }

      const rangeRows = tableRows.slice(firstIndex, lastIndex + 1)
      // we need the original row object so we can match them against the rows in range
      const selectedRows = selected.value.map(toRaw)

      selected.value = added === true
        ? selectedRows.concat(rangeRows.filter(row => selectedRows.includes(row) === false))
        : selectedRows.filter(row => rangeRows.includes(row) === false)
    } else if (ctrlKey !== true && added === true) {
      selected.value = [newSelectedRow]
    }
  })
}

const getReported = async () => {
  const { data } = await apiAuth.get('reviews/report')
  rows.value.length = 0
  for (const cmt of data.result) {
    rows.value.push({
      _id: cmt._id,
      reports: cmt.reported,
      content: cmt.comments,
      user: cmt.user._id,
      createdAt: cmt.createdAt
    })
  }
  // console.log(data)
}
const deleteCmt = async () => {
  await apiAuth.post('reviews/Admin/delete', { cmts: selected.value })
  getReported()
  getDeleted()
}

const getDeleted = async () => {
  delRows.value.length = 0
  const { data } = await apiAuth.get('reviews/deleted')
  for (const cmt of data.result) {
    delRows.value.push({
      _id: cmt._id,
      reports: cmt.reports,
      content: cmt.comment,
      user: cmt.user.username,
      createdAt: cmt.created,
      deletedAt: cmt.createdAt
    })
  }
}

onMounted(() => {
  getReported()
  getDeleted()
})
</script>

<style lang="scss" scoped></style>

<template>
      <q-card class="my-card" flat bordered>
        <RouterLink :to="'/films/'+ props.id">
        <q-img :ratio="3/4" :src="'http://image.tmdb.org/t/p/w185/' + props.poster_path">
          <div class="absolute-top-right" style="background: transparent; padding: 0;">
            <q-btn flat round color="grey" icon="add" id="add" class="absolute-top-right"/>
          </div>
          <q-tooltip  anchor="center middle"
            self="top middle">{{ title }}</q-tooltip>
        </q-img>
      </RouterLink>
        <q-card-actions align="left">
          <q-btn flat round color="green" icon="visibility"/>
          <span style="color: green;">00</span>
          <q-btn flat round color="yellow" icon="segment"/>
          <span style="color: goldenrod;">00</span>
          <q-btn flat round color="red" icon="favorite"/>
          <span style="color: red;">00</span>
        </q-card-actions>
      </q-card>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    default: () => 0
  },
  title: {
    type: String,
    default: () => ''
  },
  poster_path: {
    type: String,
    default: () => ''
  }
})
</script>
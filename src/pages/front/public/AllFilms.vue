<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-8">
      <q-btn-group spread flat class="q-ma-md">
        <q-btn-dropdown flat :label=params.year>
          <q-list>
            <q-item clickable v-close-popup v-for="(year, i) in years" :key="i" @click="setYear(year)">
              <q-item-section>
                <q-item-label>{{ year }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown flat :label="(params.rating || 'ratings')">
          <q-list>
            <q-item clickable v-close-popup v-for="i in 5" :key="i" @click="setRating(i)">
              <q-item-section>
                <q-item-label>{{ i }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown flat label="genres">
          <q-option-group v-model="chosenGenres" :options="genres" type="checkbox" />
        </q-btn-dropdown>
      </q-btn-group>
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div class="row">
          <div class="col-6 col-sm-6 col-md-4  col-lg-3 flex flex-center" v-for="(film) in films" :key="film.id"
            style="align-content: flex-start;">
            <FilmCard v-bind="film"></FilmCard>
          </div>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<script setup>
import { api, apiAuth } from 'boot/axios'
import { computed, reactive, watch, ref, onMounted } from 'vue'
import FilmCard from 'components/FilmCard.vue'
import { useUserStore } from 'stores/user.js'
import { useQuasar } from 'quasar'

const $q = useQuasar
const CurrentUser = useUserStore()
import { useGeneralStore } from 'stores/general.js'
const state = useGeneralStore()
const films = reactive([])
const chosenGenres = ref([])
const params = reactive({
  page: 1,
  region: 'TW',
  year: 2023,
  rating: '',
  genres: ''
})

const onLoad = (index, done) => {
  setTimeout(() => {
    params.page++
    getFilms()
    done()
    console.log(params.page)
  }, 1000)
}

const getFilms = async () => {
  try {
    const { data } = await api.get('/films/allFilms',
      { params })
    const results = data.results.results
    if (CurrentUser.isLogin) {
      const withUserReview = await apiAuth.post('/reviews/user', [...results])
      films.push(...withUserReview.data.films)
    } else {
      films.push(...results)
    }
  } catch (error) {
    console.log(error)
  }
}

const getUserLists = async () => {
  if (CurrentUser.isLogin) {
    try {
      const { data } = await apiAuth.get('lists/user')
      if (CurrentUser.userLists) {
        CurrentUser.userLists = data.UserLists
      }
    } catch (error) {
      $q.notify({
        type: 'warnings',
        message: 'Something went wrong'
      })
    }
  }
}

const years = computed(() => {
  const arr = []
  for (let i = 2023; i > 1990; i--) {
    arr.push(i)
  }
  return arr
})

const genres = [
  {
    value: 28,
    label: 'Action'
  },
  {
    value: 12,
    label: 'Adventure'
  },
  {
    value: 16,
    label: 'Animation'
  },
  {
    value: 35,
    label: 'Comedy'
  },
  {
    value: 80,
    label: 'Crime'
  },
  {
    value: 99,
    label: 'Documentary'
  },
  {
    value: 18,
    label: 'Drama'
  },
  {
    value: 10751,
    label: 'Family'
  },
  {
    value: 14,
    label: 'Fantasy'
  },
  {
    value: 36,
    label: 'History'
  },
  {
    value: 27,
    label: 'Horror'
  },
  {
    value: 10402,
    label: 'Music'
  },
  {
    value: 9648,
    label: 'Mystery'
  },
  {
    value: 10749,
    label: 'Romance'
  },
  {
    value: 878,
    label: 'Science Fiction'
  },
  {
    value: 10770,
    label: 'TV Movie'
  },
  {
    value: 53,
    label: 'Thriller'
  },
  {
    value: 10752,
    label: 'War'
  },
  {
    value: 37,
    label: 'Western'
  }
]

const setYear = (year) => {
  params.page = 1
  params.year = year
  films.length = 0
  getFilms()
}

const setRating = (i) => {
  params.page = 1
  params.rating = i
  films.length = 0
  getFilms()
}

watch(chosenGenres, () => {
  params.genres = chosenGenres.value.join()
  params.page = 1
  films.length = 0
  getFilms()
})

onMounted(async () => {
  await getFilms()
  await getUserLists()
  state.isLoading = false
})

</script>

<style>
.my-card {
  border: none;
}

span {
  margin-right: 5px;
  margin-right: 0px;
}

#add:hover {
  color: white;
}
</style>

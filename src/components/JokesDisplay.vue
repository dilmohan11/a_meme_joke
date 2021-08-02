<template>
  <div>
      <h4>Joke of the day!</h4>
      <div v-if="error">{{ error }}</div>
    <JokesCal :posts="posts" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import JokesCal from './JokesCal.vue'
export default {
    components:{ JokesCal },
    data() {
        return {
            apikey: 'avgrrKTWsChj',
        }       
    },
    setup() {
            const posts = ref([])
            const error = ref(null)
            const categories = ref([])

            const load = async() => {
                try {
                
                   let data = await fetch('https://api.chucknorris.io/jokes/random?category=animal')
                   let categories_data = await fetch('https://api.chucknorris.io/jokes/categories')

                   if(!data.ok) {
                       throw Error('Data not available')
                   }
                
                   posts.value = await data.json()
                   categories.value = await categories_data.json()
                   console.log(posts.value)
                   console.log(categories.value)
                }
                catch(err) {
                    error.value = err.message
                    console.log(error.value)
                }
            }
            load()
            return { posts, categories, error, load }
        }
}
</script>

<style>

</style>
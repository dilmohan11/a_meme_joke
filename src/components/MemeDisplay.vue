<template>
<div v-if="error">{{ error }}</div>
<div v-if="posts.length">
     <MemeCal :posts="posts"  />
</div>
<div v-else>
    Loading ...
</div>
 
</template>

<script>
import { ref } from '@vue/reactivity'
import MemeCal from '../components/MemeCal.vue'

export default {

    components: { MemeCal },
    data() {
        return {
            apikey: 'avgrrKTWsChj',
        }
    },
    setup() {
        const posts = ref([])
        const error = ref(null)

        const load = async () => {

            try {
                    let data = await fetch("https://random-stuff-api.p.rapidapi.com/image/memes?api_key=%3CREQUIRED%3E", {
                    "method": "GET",
                    "headers": {
                        "x-api-key": "avgrrKTWsChj",
                        "x-rapidapi-key": "057f61365dmshc436d17eadd8d4dp11e2aejsn02a060a7327b",
                        "x-rapidapi-host": "random-stuff-api.p.rapidapi.com"
                    }
                })

                if(!data.ok){
                    throw Error('Data not available!')
                }
                posts.value = await data.json()
            }
            catch(err)
            {
                error.value = err.message
                console.log(error.value)
            }
            
        }
        load()
        return { posts, error, load }
    },

//         mounted() {
             
//         fetch("https://random-stuff-api.p.rapidapi.com/image/memes?api_key=%3CREQUIRED%3E", {
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "avgrrKTWsChj",
// 		"x-rapidapi-key": "057f61365dmshc436d17eadd8d4dp11e2aejsn02a060a7327b",
// 		"x-rapidapi-host": "random-stuff-api.p.rapidapi.com"
// 	}
// })
//                .then(res => res.json())
//                .then(data => this.posts = data[0])
//                .catch(err => {
// 	                console.error(err);
//                 })
        
//     }
}  
</script>

<style>

</style>
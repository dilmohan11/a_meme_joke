<template>
  <div  class="meme-pic">
    
    <div v-if="!posts.includes(mp4)">
      <img :src="posts" alt="meme">
    </div>
    <div v-if="posts.includes(mp4)">
     <video controls poster="">
        <source :src="posts" type="video/mp4">
        Your browser does not support the video tag.
      </video> 
  </div>
  </div> 
 
  <!-- <div v-if="videoCheck">
     <video controls :poster="posts[0]">
        <source :src="imgPost[0]" type="video/mp4">
        
        Your browser does not support the video tag.
      </video> 
  </div>
  <div v-else>
    <img :src="posts[0]" alt="meme image" >
  </div> -->
  
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
  props: ['posts'],
  setup(props) {
    const imgCheck = ref('')
    imgCheck.value = props.posts[0]
    console.log(imgCheck)
    return { imgCheck }
  }

}

</script>

<style>
.meme-pic img {
  display: block;
  max-width: 600px;
  background: lightcoral;
  margin: 30px auto;
}

.meme-pic video {
  display:block;
  max-width: 600px;
  margin: 30px auto;
}
</style>
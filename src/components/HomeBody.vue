<template>
  <main>
      <div class="main_body flex flex-row">
          <div class="w-1/2 block text-center  h-auto">
                <img src="../assets/joke_hamster.jpg" alt="Joke hamster" class="w-3/4 mx-auto rounded-xl shadow-lg">
                <router-link :to="{name: 'Jokes'}" class="btn1" @click="btnAnimate"><span>Tell a Joke</span></router-link>
          </div>
          <div class="w-1/2 block text-center h-auto">
                <img src="../assets/meme_monkey.jpg" alt="Meme Monkey" class="w-3/4 mx-auto rounded-xl shadow-lg">
                <router-link :to="{name: 'Memes'}" class="btn2"  @click="btnAnimate"><span>Show a Meme</span></router-link>
          </div>
      </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped>
.main_body a {
    font-family: 'Lobster', cursive;
    position: relative;
    width: 300px;
    height: 75px;
    margin: 10px 0;
    font-size: 24px;
    color:#000;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.5s;
}

.main_body a:hover {
    color:#fff;
}

/* .main_body a:before {
    content: '';
    position:absolute;
    top:0;
    left:0;
    width: 0;
    height: 100%;
    background-image: url('../assets/btn-bg1.png');
    background-size: cover;
    transform-origin: left;
    transition: 0.5s;
} */

.btn1:before {
    content: '';
    position:absolute;
    top:0;
    left:0;
    width: 0;
    height: 100%;
    background-image: url('../assets/btn-bg1.png');
    background-size: cover;
    transform-origin: left;
    transition: 0.5s;
}

.btn2:before {
    content: '';
    position:absolute;
    top:0;
    left:0;
    width: 0;
    height: 100%;
    background-image: url('../assets/btn-bg2.png');
    background-size: cover;
    transform-origin: left;
    transition: 0.5s;
}
.main_body a:hover:before {
    width: 100%;
}

.main_body a span {
    position:relative;
    z-index: 1;
}


</style>
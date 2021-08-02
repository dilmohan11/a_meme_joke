<template>
  <header>
      <h1 class="text-3xl text-center text-red-800 font-bold mb-5">The Jokes and Meme Generator </h1>
      <nav class="text-center text-xl font-semibold text-blue-800 mb-5">
          <router-link :to="{name: 'Jokes'}" class="pr-5">Jokes</router-link>
          <router-link :to="{name: 'Memes'}">Memes</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
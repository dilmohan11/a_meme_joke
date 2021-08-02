<template>
    <div>
        <p>{{posts.value}}</p>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['posts']
}
</script>

<style>

</style>
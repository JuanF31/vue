<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <Counter :start="101"/> -->
  <Indecision/>
</template>

<script>
  import Indecision from './components/Indecision.vue'
  export default {
    name: 'App',
    components: {
      Indecision
    }
  }
// import Counter from './components/Counter.vue'
// export default {
//   name: 'App',
//   components: {
//     Counter
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

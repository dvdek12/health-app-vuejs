<template>
  <div>

    <div class="w-3/4 h-auto bg-red-100" @mouseover="hover = true" @mouseleave="hover = false">
      
      <h2 class="whitespace-nowrap"></h2>

    </div>

    <div v-if="hover">
    </div>

  </div>
</template>

<script>


export default {
  data() {
    return {
      hover: false
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state)
    }
  }
}
</script>
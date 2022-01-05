<template>

    <div @mouseover="hover = true" @mouseleave="hover = false" class="z-20 flex flex-col items-center justify-center cursor-pointer">
      <div :class="getClasses()">
          <img :src="getImgUrl()" :alt="image" class="w-16 h-16">
      </div>

      <div v-if="hover" class="fixed z-50 w-64  h-32 bg-gray-800 rounded-lg flex transition ease-in-out"> 
          <div class="w-1/2 flex justify-center items-center">
            <img :src="getImgUrl()" :alt="image" class="w-8 h-8 ">
          </div>
          <div class="w-1/2 flex items-center">
            <p class="text-start text-sm italic text-gray-600 self-center ">
              {{popupMessage}}
            </p>
          </div>
      </div>
    </div>

</template>

<script>
export default {
  props: ['popupMessage', 'image', 'borderColor'],
  data() {
    return {
      hover: false
    }
  },

  methods: {
    getImgUrl() {
      return require('../assets/icons/' + this.image)
    },

    getClasses() {
      return `z-40 w-28 h-28 border-8 border-${this.borderColor} border-solid rounded-full flex justify-center items-center`
    }
  }
}
</script>
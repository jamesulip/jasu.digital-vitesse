<script setup lang="ts">
// chunk this random imagescount

const images = Array.from({ length: 21 }, (_, i) => `/gallery/img${i}.jpg`)
// chunk the images into 3 with length depending on the images length
const randomImagesChunks = images.reduce((acc, _, i, arr) => i % 3 ? acc : [...acc, arr.slice(i, i + 3)], [])
</script>

<template>
  <section class="overflow-hidden text-gray-700 ">
    <hr class="border-[#25947a] mt-10 border-3">
    <div class="w-full text-center p-4">
      <span class="text-[#25947a] text-3xl font-bold">Gallery</span>
    </div>
    <div class="flex gap-3 p-4">
      <div v-for="col in randomImagesChunks" :key="`row-${col}`" class="flex flex-col gap-3 w-full  ">
        <div v-for="row in col" :key="`col-${row}`" class="flex flex-row gap-3">
          <img :src="row" class="w-full">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>

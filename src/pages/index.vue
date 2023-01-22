<script setup lang="ts">
const images = Array.from({ length: 41 }, (_, i) => `/gallery/img${i}.jpg`)
const randomImagesChunks = images.reduce((acc, _, i) => {
  const chunkIndex = Math.floor(i / Math.ceil(images.length / 3))
  if (!acc[chunkIndex])
    acc[chunkIndex] = []
  acc[chunkIndex].push(images[i])
  return acc
}, [])
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

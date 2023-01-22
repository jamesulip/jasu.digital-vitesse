<script setup lang="ts">
const randomImagesCount = 40
// chunk this random imagescount
const chunk = 10
const randomImages = Array.from({ length: randomImagesCount }, (_, i) => i + 1)
const randomImagesChunks = randomImages.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / chunk)
  if (!resultArray[chunkIndex])
    resultArray[chunkIndex] = []

  resultArray[chunkIndex].push(item)
  return resultArray
}, [])

function randonHeight() {
  return Math.floor(Math.random() * 100) + 300
}
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
          <img :src="`https://picsum.photos/id/${randonHeight()}/300/${randonHeight()}`" class="w-full">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>

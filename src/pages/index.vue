<script setup lang="ts">
function randonHeight() {
  return Math.floor(Math.random() * 100) + 300
}
</script>

<template>
  <section class="overflow-hidden text-gray-700 ">
    <div class="container  mx-auto p-8">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div v-for="i in 20" :key="i" class="flex flex-wrap w-1/3">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
              :src="`https://random.imagecdn.app/${randonHeight()}/${randonHeight()}`"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>

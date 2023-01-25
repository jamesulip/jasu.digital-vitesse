<script setup lang="ts">
// usehead
useHead({
  title: 'About',
  // create meta tags for about
  meta: [
    {
      name: 'title',
      content: 'About',
    },
    {
      name: 'description',
      content: 'Unleash your creativity and bring your vision to life with the help of Julie Ann Santos Ulip, a highly skilled and accomplished freelance artist. With a strong background in Fine Arts and Advertising Design, she can help you create stunning digital illustrations, portraits, and more. Whether you\'re looking for a new tattoo design, a custom sculpture, or an animated project, Julie has the talent and experience to bring your ideas to reality. Get in touch today and let\'s make something amazing together!',
    },
  ],
})
</script>

<template>
  <section class="overflow-hidden text-gray-700 ">
    <hr class="border-[#25947a] mt-10 border-3">
    <div class="w-full text-center p-4">
      <span class="text-[#25947a] text-3xl font-bold">About</span>
    </div>
    <div class="flex w-full my-10">
      <div class="gap-6 mx-auto max-w-3xl w-full grid p-5 md:grid-cols-2 grid-cols-1">
        <div>
          <img src="/photo.jpg" alt="Julie Anne Ulip" class="w-full">
        </div>
        <div class="leading-tight">
          <p class="text-justify">
            Julie Ann Santos Ulip is a highly skilled and accomplished freelance artist who has been honing her craft from a young age. She was discovered by her art teacher at the age of 10, and with the support of her family and guidance from her teacher, she went on to pursue a degree in Fine Arts with a major in Advertising Design at Far Eastern University. She graduated Magna Cum Laude and decided to continue her career as a freelancer, exploring various branches of visual arts such as tattooing, sculpting, and animation. Her focus has now centered around digital illustrations, particularly portraits. In her free time, she continues to work on her personal paintings and other crafts, always striving to improve her skills.
          </p>
          <br>
          <p class="text-justify">
            Julie Ann Santos Ulip
            She decided to start as a freelancer after graduating from college. She took Bachelor of FIne ARts major in Advertsing Design in Far Eastern University and graduated as Magna Cum Laude. She admits that Advertising is not her niche and wanted to explore other branches of visual arts like tattooing, sculpting and animation. Over time, her focus became more and more centered around digital illustrations, especially portraits. During her free time, she prioritized working on her personal paintings and other crafts.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'jasu.digital',
  meta: [
    {
      name: 'title',
      content: 'jasu.digital',
    },
    {
      name: 'description',
      content: 'Unleash your creativity and bring your vision to life with the help of Julie Ann Santos Ulip, a highly skilled and accomplished freelance artist. With a strong background in Fine Arts and Advertising Design, she can help you create stunning digital illustrations, portraits, and more. Whether you\'re looking for a new tattoo design, a custom sculpture, or an animated project, Julie has the talent and experience to bring your ideas to reality. Get in touch today and let\'s make something amazing together!',
    },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
    {
      name: 'keywords',
      content: 'freelance artist, fine arts, advertising design, digital illustrations, portraits, tattooing, sculpting, animation, personal paintings, crafts, honing craft, discovered, art teacher, magna cum laude, guidance, support, family, freelancer, explore, visual arts, digital illustrations, personal paintings, improving skills',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://jasu.digital/',
    },
    {
      property: 'og:title',
      content: 'jasu.digital',
    },
    {
      property: 'og:description',
      content: 'Unleash your creativity and bring your vision to life with the help of Julie Ann Santos Ulip, a highly skilled and accomplished freelance artist. With a strong background in Fine Arts and Advertising Design, she can help you create stunning digital illustrations, portraits, and more. Whether you\'re looking for a new tattoo design, a custom sculpture, or an animated project, Julie has the talent and experience to bring your ideas to reality. Get in touch today and let\'s make something amazing together!',
    },
    {
      property: 'og:image',
      content: 'https://jasu.digital/photo.jpg',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:url',
      content: 'https://jasu.digital/',
    },
    {
      property: 'twitter:title',
      content: 'jasu.digital',
    },
    {
      property: 'twitter:description',
      content: 'Unleash your creativity and bring your vision to life with the help of Julie Ann Santos Ulip, a highly skilled and accomplished freelance artist. With a strong background in Fine Arts and Advertising Design, she can help you create stunning digital illustrations, portraits, and more. Whether you\'re looking for a new tattoo design, a custom sculpture, or an animated project, Julie has the talent and experience to bring your ideas to reality. Get in touch today and let\'s make something amazing together!',
    },
    {
      property: 'twitter:image',
      content: 'https://jasu.digital/photo.jpg',
    },

  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon.jpg' : '/favicon.jpg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

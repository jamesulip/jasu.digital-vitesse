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
      content: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.18169-9/481520_503008339737925_910996344_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGtykjXzfGq3URgf0ykUNu8xVfS7klDqIrFV9LuSUOoip2m4EDD9QSLHJJzj6MzkTJ9Dq7c1CROUEugrTsCBNWO&_nc_ohc=afOIZPwJ5ScAX_wgs_I&_nc_oc=AQmezL7MpbYfYXXZfkLRMEtSjzsYLi-AkxGnpGvPD6Yt5m2eqa-9MYU7GLtpc7dDxU5yfnaVUzydY77a6YmgJLsa&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfCXf9frHZMhMDWIVjLPRkqkO9JkF8dc8ee3CaOms1yb8Q&oe=63F47F2C',
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
      content: 'https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.18169-9/481520_503008339737925_910996344_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGtykjXzfGq3URgf0ykUNu8xVfS7klDqIrFV9LuSUOoip2m4EDD9QSLHJJzj6MzkTJ9Dq7c1CROUEugrTsCBNWO&_nc_ohc=afOIZPwJ5ScAX_wgs_I&_nc_oc=AQmezL7MpbYfYXXZfkLRMEtSjzsYLi-AkxGnpGvPD6Yt5m2eqa-9MYU7GLtpc7dDxU5yfnaVUzydY77a6YmgJLsa&_nc_ht=scontent.fmnl13-1.fna&oh=00_AfCXf9frHZMhMDWIVjLPRkqkO9JkF8dc8ee3CaOms1yb8Q&oe=63F47F2C',
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

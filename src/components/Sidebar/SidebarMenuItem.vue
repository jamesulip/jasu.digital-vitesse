<script lang="ts" setup>
const { setDropdownMenu } = useMenu()
const menu = ref([
  {
    name: 'GALLERY',
    link: '/',
  },
  {
    name: 'ABOUT',
    link: '/about',
  },
  {
    name: 'SHOP',
    link: '/shop',
  },
  {
    name: 'CONTACT',
    link: '/contact',
  },
])
function tt() {
  setDropdownMenu(false)
}
</script>

<template>
  <ul class="max-w-xs md:text-left text-center text-[18pt] font-bold flex flex-col md:gap-5 gap-1">
    <li v-for="menuItem in menu" :key="menuItem.name">
      <RouterLink
        class="block  rounded-md"
        :class="{ 'text-[#25947a]': $route.path === menuItem.link }"
        :to="menuItem.link"
        @click="tt"
      >
        {{ menuItem.name }}
      </RouterLink>
    </li>
  </ul>
</template>

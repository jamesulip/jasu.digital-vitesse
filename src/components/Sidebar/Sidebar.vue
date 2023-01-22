<template>
  <div class="max-w-min p-8 flex flex-col justify-between">
    <div class="logo flex flex-col text-center text-[#25947a]">
      <span class="text-7xl">
        JASU
      </span>
      <span>DIGITAL ARTS</span>
    </div>
    <div>
      <SidebarMenuItem />
    </div>
    <div>
      <img src="/logo.webp" class="w-full">
      <!-- create 3 icons  inline -->
      <div class="flex justify-between">
        <div class="i-carbon-logo-facebook" />
        <div class="i-carbon-logo-instagram" />
        <div class="i-carbon-email" />
      </div>
    </div>
  </div>
</template>

<style  scoped>
.logo {
    font-family: 'Amatic SC';
}
</style>

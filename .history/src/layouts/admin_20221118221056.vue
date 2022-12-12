<template>
    <div class="admin w-screen h-screen flex">
     <menu-component
      <div class="bg-gray-200 flex-1">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import menuComponent from './admin/menu.vue'
  </script>
  
  <style lang="scss" scoped>
  
  </style>
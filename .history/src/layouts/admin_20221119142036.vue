<template>
  <div class="admin w-screen h-screen flex">
    <menu-component />
    <div class="bg-gray-200 flex-1">
      <navbar />
      <HistoryLink />
      <div class="mt-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HistoryLink from "./admin/historyLink.vue";
import menuComponent from "./admin/menu.vue";
import navbar from "./admin/navbar.vue";
</script>

<style lang="scss" scoped></style>

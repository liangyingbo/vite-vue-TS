<template>
  <div class="admin w-screen min-h-screen flex overflow-hidden">
    <menu-component class="hidden md:block"/>
    <div class="bg-gray-100 flex-1">
      <navbar />
      <HistoryLink />
      <div class="mt-3 px">
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

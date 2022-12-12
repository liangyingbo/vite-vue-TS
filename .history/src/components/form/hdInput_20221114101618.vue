<template>
    
    <input type="text"  class="hd-input" />

</template>

<script  lang="ts" setup></script>

<style lang="scss" scoped>
.hd-input {
  @apply w-full border py-1 border-gray-500 px-2 outline-none placeholder:text-sm  rounded-sm  focus:ring-2 ring-offset-2 duration-300 ring-offset-violet-600 focus:border-white;
}
</style>
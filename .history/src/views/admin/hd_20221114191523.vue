<template>
    <div class="">
        <input type="text">
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
div{
    @apply flex justify-center items-center w-full bg-slate-500 h-screen;

    input{
        @apply  border py-2 px-1 outline-none rounded-md border-violet-400;
    }
}
</style>
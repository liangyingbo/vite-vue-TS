<template>
  <div class="px-3 py-4 grid grid-flow-col gap-3">
    <el-card shadow="hover" v-for="(card,index) in cards" :key="index" class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          <span>{{card.title}}</span>
          <el-tag type="danger" size="normal" effect="dark">月</el-tag>
        </div>
      </template>
      <!-- card body -->
      <div class="flex justify-between items-center">
        <span class="text-base">${{card.price}}</span>
        <i class="fab fa-chrome text-3xl text-violet-500"></i>
      </div>
      <div class="flex justify-between items-center mt-5">
        <span>{{card.desc}}</span>
        <span>{{card.descNum}}</span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface ICard{
    title:string,
    price:number,
    icon:string,
    desc:string,
    descNum:number,
}

const cards = ref<ICard[]>([
    {title:'总人数',price:424424,icon:"fab fa-facebook-messenger",desc:'总金额',descNum:1353647},
    {title:'订单数',price:242424,icon:"fab fa-freebsd",desc:'订单量',descNum:896968},
    {title:'下载量',price:89642,icon:"fab fa-guilded",desc:'下载人数',descNum:645646},
    {title:'转发数',price:65756,icon:"fab fa-mendeley",desc:'转发人数',descNum:646535}
])


</script>

<style lang="scss" scoped></style>

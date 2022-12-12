<template>
  <div class="admin w-screen h-screen flex">
    <div class="w-[200px] py-2 bg-gray-800">
      <div class="text-white flex items-center py-2 px-4">
        <i class="fab fa-joomla text-2xl text-fuchsia-400 mr-2"></i>
        <span class="text-base text-gray-300">每晚八点直播</span>
      </div>
      <div class="left-container">
        <dl v-for="(menu,index) of menuList" :key="index">
          <dt>
            <div>
              <i :class="menu.icon" class="text-[15px]"></i>
              <span class="ml-2 text-[14px]">{{menu.title}}</span>
            </div>
            <i class="fas fa-angle-down"></i>
          </dt>
          <dd :class="{active:cmenu.active}"  v-for="(cmenu,key) in menu.children" :key="key">{{cmenu.title}}</dd>
         </dl>
      </div>
    </div>
    <div class="bg-gray-200 flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface IMenuItem {
  title: string;
  icon?: string;
  active?:boolean
}

interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}

const menuList = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fas fa-vault",
    children: [
      {
        title: "404错误",
      },
      {
        title: "500错误",
        active:true
      },
     
    ],
  },
  {
        title: "编辑器",
        icon: "fab fa-line",
        children: [
          {
            title: "markDown编辑器",
          },
          {
            title: "富文本编辑器",
          },
        ],
      },
])
</script>

<style lang="scss" scoped>
.admin {
  .left-container {
    dl {
      @apply text-white mt-3 mx-4;
      dt {
        @apply flex justify-between items-center cursor-pointer;
      }
      dd {
            @apply bg-violet-500 hover:bg-violet-600 duration-300
        @apply my-2 px-4 py-2 rounded-md text-gray-200 cursor-pointer   text-sm;
        &.active{
        }
      }
    }
  }
}
</style>

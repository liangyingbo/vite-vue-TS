<template>
      <div class="w-[200px] py-2 bg-gray-800">
      <div class="text-white flex items-center py-2 px-4">
        <i class="fab fa-joomla text-2xl text-fuchsia-400 mr-2"></i>
        <span class="text-base text-gray-300">每晚八点直播</span>
      </div>
      <div class="left-container">
        <dl v-for="(route, index) of menu.menus" :key="index">
          <dt @click="handle(route)">
            <div>
              <i :class="route.meta.icon" class="text-[15px]"></i>
              <span class="ml-2 text-[14px]">{{ route.meta.title }}</span>
            </div>
            <i class="fas fa-angle-down duration-500" :class="{'rotate-180':route.meta.isClick}" ></i>
          </dt>
          <dd
            v-show="route.meta.isClick"
            :class="{ active: routeChild.meta?.isClick }"
            v-for="(routeChild, key) in route.children"
            :key="key"
            @click="handle(route,routeChild)"
          >
            {{ routeChild.meta?.title }}
          </dd>
        </dl>
      </div>
    </div>
</template>


<script lang="ts" setup>
import menuStore from "@/store/menuStore";
import { ref } from "vue";
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from "vue-router";

// const routerStore = router()
// const routerServer = useRouter()

const menu = menuStore()

const handle = (pRoute: RouteRecordNormalized , cRoute?:RouteRecordRaw ) => {
  resetMenu();
  pRoute.meta.isClick = true;
  if(cRoute && cRoute.meta){
    cRoute.meta.isClick = true;
    console.log(cRoute)
    routerServer.push(cRoute)

  }
};

// const resetMenu = () => {
//   routerStore.routes.forEach(route => {
//     route.meta.isClick = false;
//     route.children?.forEach(route => {
//      if(route.meta) route.meta.isClick = false
//     });
//   });
// };
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
        @apply my-2 px-4 py-2 rounded-md text-gray-200 cursor-pointer  hover:bg-violet-600 duration-300 text-sm;
        &.active {
          @apply bg-violet-400;
        }
      }
    }
  }
}
</style>
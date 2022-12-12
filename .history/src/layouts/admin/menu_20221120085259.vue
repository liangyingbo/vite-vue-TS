<template>
      <div class="w-[200px] py-2 bg-gray-800">
      <div class="text-white flex items-center py-2 px-4">
        <i class="fab fa-joomla text-2xl text-fuchsia-400 mr-2"></i>
        <span class="text-base text-gray-300">每晚八点直播</span>
      </div>
      <div class="left-container">
        <dl v-for="(route, index) of routerStore.routes" :key="index">
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
          >
            {{ routeChild.meta?.title }}
          </dd>
        </dl>
      </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from "vue";
import { router } from '@/store/router';

const routerStore = router()

// interface IMenuItem {
//   title: string;
//   icon?: string;
//   active?: boolean;
// }

// interface IMenu extends IMenuItem {
//   children?: IMenuItem[];
// }

// const menuList = ref<IMenu[]>([
//   {
//     title: "错误页面",
//     icon: "fas fa-vault",
//     active: true,
//     children: [
//       {
//         title: "404错误",
//         active: true,
//       },
//       {
//         title: "403错误",
//       },
//       {
//         title: "500错误",
//       },
//     ],
//   },
//   {
//     title: "编辑器",
//     icon: "fab fa-line",
//     children: [
//       {
//         title: "markDown编辑器",
//       },
//       {
//         title: "富文本编辑器",
//       },
//     ],
//   },
// ]);
const handle = (pRoute: , cRoute?: ) => {
  // resetMenu();
  // pmenu.active = true;
};

// const resetMenu = () => {
//   menuList.value.forEach((menu) => {
//     menu.active = false;
//     menu.children?.forEach((m) => {
//       m.active = false;
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
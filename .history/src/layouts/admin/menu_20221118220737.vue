<template>
     
</template>


<script lang="ts" setup>
import { ref } from "vue";

interface IMenuItem {
  title: string;
  icon?: string;
  active?: boolean;
}

interface IMenu extends IMenuItem {
  children?: IMenuItem[];
}

const menuList = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fas fa-vault",
    active: true,
    children: [
      {
        title: "404错误",
        active: true,
      },
      {
        title: "403错误",
      },
      {
        title: "500错误",
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
]);

const resetMenu = () => {
  menuList.value.forEach((menu) => {
    menu.active = false;
    menu.children?.forEach((m) => {
      m.active = false;
    });
  });
};
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
  resetMenu();
  pmenu.active = true;
};
</script>


<style lang="scss" scoped>

</style>
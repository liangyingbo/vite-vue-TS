<template>
  <div class="px-3 py-4 grid grid-flow-col gap-3">
    <el-card shadow="hover" v-for="n in 4" class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          <span>总人数</span>
          <el-tag type="danger" size="normal" effect="dark">月</el-tag>
        </div>
      </template>
      <!-- card body -->
      <div class="flex justify-between items-center">
        <span class="text-base">$4245363643</span>
        <i class="fab fa-chrome text-3xl text-violet-500"></i>
      </div>
      <div class="flex justify-between items-center mt-5">
        <span>总人数</span>
        <span>13144</span>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

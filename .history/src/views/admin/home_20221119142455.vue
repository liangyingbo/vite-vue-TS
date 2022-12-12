<template>
  <div class="bg-white px-3 py-4">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
         </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

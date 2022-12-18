<template>
  <div class="article">
    <AnimiationList tag="ul">
      <li
        v-for="(article, index) of articles"
        :key="article.id"
        :data-index="index"
      >
        {{ article.title }}
      </li>
    </AnimiationList>
  </div>
</template>

<script setup lang="ts">
import { article } from "@/apis/articleApi";

const articles = ref();

article().then(({ result }) => {
  articles.value = result;
});
</script>
<style lang="scss" scoped>
.article {
  background-color: #2c3e50;
  min-height: 100vh;
  width: 100vw;
  ul {
    li {
      margin: 15px;
      padding:5px 15px;
      background: #e67e22;
      color: #333;
      border-radius: 5px;
      width: 90%;
    }
  }
}
</style>

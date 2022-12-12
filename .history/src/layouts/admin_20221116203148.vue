<template>
    <div>
         <router-view></router-view>
    </div>
</template>
<script lang="ts" setup>
import routes from "@/router/routes";


</script>

<script lang="ts">
export default {
    route:{meta:{auth:true}}
}
</script>

<style lang="scss" scoped>

</style>
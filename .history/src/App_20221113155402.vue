<script setup lang="ts">
import {info} from '@/apis/userApi'

console.log(info())

 </script>

 <template>
    <div>
        <ul class="bg-red-500">
        <li>首页</li>    
        <li>关于</li>
        <li>我的</li>
    </ul>
    <router-view ></router-view>
    </div>
   
 </template>

<style scoped> 
</style>

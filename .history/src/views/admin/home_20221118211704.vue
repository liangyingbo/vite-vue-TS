<template>
    <div class="admin w-screen h-screen flex ">
        <div class="w-[200px] py-2 bg-gray-800">
             <div class="text-white  flex items-center py-2 px-4">
                <i class="fab fa-joomla text-2xl text-fuchsia-400 mr-2"></i>
                <span class="text-base text-gray-300">每晚八点直播</span>
             </div>
             <div class="left-container">
                <dl>
                    <dt>
                        <div>
                        <i class="fas fa-vault text-[15px]"></i>
                        <span class="ml-2 text-[14px]">错误页面</span>  
                        </div>
                        <i class="fas fa-angle-down"></i>
                       
                    </dt>
                    <dd class="">404错误</dd>
                    <dd>500错误</dd>
                    
                </dl>
             </div>
        </div>
        <div class="bg-gray-200 flex-1">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.admin{
    .left-container {
          dl{
            @apply text-white mt-3 mx-4;
            dt{
                @apply flex justify-between items-center cursor-pointer;
            }
            dd{
                @apply my-2 px-4 py-2 bg-violet-500  rounded-md text-gray-200 cursor-pointer hover:bg-violet-600 duration-300 text-sm;
            }
          } 
    }
}
</style>
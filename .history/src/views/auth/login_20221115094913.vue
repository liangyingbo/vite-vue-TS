
<template>
  <div
    class="
      bg-slate-100
      h-screen
      flex
      justify-center
      items-start
      md:items-center
    "
  >
    <div
      class="
        w-[720px]
        bg-white
        md:grid
        grid-cols-2
        shadow-md
        rounded-md
        overflow-hidden
        m-4
        md:m-0
      "
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mb-10">会员登录</h2>
        <Form >
          <Field name="account" class="hd-input" :rules="{required:true,email:true}"></Field>
          <ErrorMessage name="account" class="hd-error"></ErrorMessage>
        </Form>
        <HdButton></HdButton>

        <div class="flex gap-2 text-xs text-gray-700 justify-center mt-4">
          <a href="">网站首页</a>
          <a href="">会员注册</a>
          <a href="">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/work.jpg" class="h-80 w-screen object-cover" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import v from '@/plugins/valitdate'
const {Form,Field,ErrorMessage} = v
</script>
 
<style lang="scss" scoped>
form {
  .hd-input{
    @apply w-full border py-1 border-gray-500 px-2 outline-none placeholder:text-sm  rounded-sm  focus:ring-2 ring-offset-2 duration-300 ring-offset-violet-600 focus:border-white;

  }
  .hd-error{
    @apply bg-pink-500 text-white px-2 py-1 mt-4 rounded-md
  }
}
</style>

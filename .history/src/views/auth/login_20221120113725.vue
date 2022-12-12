<template>
  <div
    class="bg-slate-100 h-screen flex justify-center items-start md:items-center"
  >
    <div
      class="w-[720px] bg-white md:grid grid-cols-2 shadow-md rounded-md overflow-hidden m-4 md:m-0"
    >
      <div class="p-6 flex flex-col justify-between items-center">
        <div class="w-full">
          <h2 class="text-center text-gray-700 text-lg mb-10">会员登录</h2>
          <Form @submit="onSubmit">
            <Field
              value="admin@sina.com"
              name="account"
              class="hd-input"
              :rules="{ required: true, email: true }"
              label="账号"
            ></Field>
            <ErrorMessage
              name="account"
              as="div"
              class="hd-error"
            ></ErrorMessage>
            <Field
              value="adim888"
              name="password"
              class="hd-input mt-3"
              :rules="{ required: true, min: 3 }"
              type="password"
              label="密码"
            ></Field>
            <ErrorMessage
              name="password"
              as="div"
              class="hd-error"
            ></ErrorMessage>
            <button class="hd-button w-full mt-3">登录</button>
          </Form>
          <div class="text-center">
            <i
              class="fab fa-weixin bg-green-600 text-white rounded-full p-2 mt-3"
            ></i>
          </div>
        </div>
        <div class="flex gap-2 text-xs text-gray-700 justify-center mt-4 mb-4">
          <a href="">网站首页</a>
          <a href="">会员注册</a>
          <a href="">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img
          src="/images/work.jpg"
          class="absolute object-cover h-full w-full"
        />
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import v from "@/plugins/valitdate";
import { login } from "@/apis/userApi";
import { set } from "@/utils";
import { useRouter } from 'vue-router';
const { Form, Field, ErrorMessage } = v;
const router = useRouter()
// console.log(route.name)
const onSubmit = async () => {
  const {
    data: { token },
  } = await login();
   set('token',{token,expire:1000})
   router.push({path:'/home'})
};
</script>
<style lang="scss" scoped>

</style>

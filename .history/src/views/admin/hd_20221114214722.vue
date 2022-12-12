<script lang="ts" setup>
import getrules from '@/plugins/valitdate'
console.log(getrules)
// import {Form,Field,ErrorMessage, defineRule,configure} from 'vee-validate'
import {required,min,max,email} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
// const accountRule = (value) =>{
//    return /@/.test(value) ? true :'邮箱验证不通过'
// r}
// configure({
// 	generateMessage: localize('zh_CN', zh_CN),
// });
// const onSubmit = (value:any) =>{
//     console.log(value)
//  }
//  defineRule('required',requied)
//  defineRule('email',email)
</script>

<template>
    <div class="">
        <Form @submit="onSubmit">
            <Field name="account" :rules="{email:true,required:true}" label="账号"></Field>
            <ErrorMessage name="account"></ErrorMessage>
            <br/>
            <button class="border bg-green-500 rounded-md text-white">提交表单</button>
        </Form>
     </div>
</template>


<style lang="scss" scoped>
div{
    @apply flex justify-center items-center w-full bg-slate-500 h-screen;

    input{
        @apply  border py-2 px-1 outline-none rounded-md border-violet-400;
    }
}

 
</style>

<script lang="ts" setup>
import {Form,Field,ErrorMessage, defineRule} from 'vee-validate'
import {required,min,max,email} from '@vee-validate/rules'
// const accountRule = (value) =>{
//    return /@/.test(value) ? true :'邮箱验证不通过'
// }
const onSubmit = (value:string) =>{
    console.log(value)
 }
 defineRule('required',required)
 defineRule('email',email)
</script>

<template>
    <div class="">
        <Form @submit="onSubmit">
            <Field name="account" :rules="{email:true,required:true}"></Field>
            <ErrorMessage name="account"></ErrorMessage>
            <br/>
            <button class="border border-violet-500 rounded-md text-white bg-slate-600">提交表单</button>
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

function defindRule() {
  throw new Error('Function not implemented.')
}
</style>
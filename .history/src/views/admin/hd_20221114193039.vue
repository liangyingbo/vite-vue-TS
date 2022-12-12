
<script lang="ts" setup>
import {Form,Field,ErrorMessage} from 'vee-validate'
const accountRule = (value) =>{
   return /@/.test(value) ? true :'邮箱验证不通过'
}
const onSubmit = (value) =>{
    console.log(value)
}
</script>

<template>
    <div class="">
        <Form submit="onSubmit">
            <Field name="account" :rules="accountRule"></Field>
            <ErrorMessage name="account"></ErrorMessage>
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
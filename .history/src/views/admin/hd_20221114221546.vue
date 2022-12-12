<script lang="ts" setup>
import v from '@/plugins/valitdate'
const {Form,Field,ErrorMessage}  = v 
 
const onSubmit = (value:any) =>{
    console.log(value)
 }
 
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
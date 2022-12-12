<template>
    <div class="">
        <Form>
            <Field></Field>
        </Form>
     </div>
</template>

<script lang="ts" setup>
import {Form,Field,ErrorMessage} from 'vee-validate'
</script>

<style lang="scss" scoped>
div{
    @apply flex justify-center items-center w-full bg-slate-500 h-screen;

    input{
        @apply  border py-2 px-1 outline-none rounded-md border-violet-400;
    }
}
</style>
<template>
    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="Username" name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value.trim="formState.username" autocomplete="off" />
        </a-form-item>

        <a-form-item label="Password" name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value.trim="formState.password" autocomplete="off" />
        </a-form-item>

        <!-- <a-form-item label="rePassword" name="rePassword"
            :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value.trim="formState.password" autocomplete="off" />
        </a-form-item> -->

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
    <!-- <button @click="handleInfo">测试</button> -->
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { reqSearchOther, reqUserRegister } from '@/api/user/login&reg';

interface FormState {
    username: string;
    password: string;
    remember: boolean;
}

const formState = reactive<FormState>({
    username: 'emma',
    password: '123456',
    remember: true,
});
const onFinish = async (values: any) => {
    const { username: name, password } = values
    await reqUserRegister({ name, password })
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

// const handleInfo = async () => {
//     const res = await reqSearchOther()
//     console.log(res, 'request')
// }
</script>

<style scoped lang="scss"></style>

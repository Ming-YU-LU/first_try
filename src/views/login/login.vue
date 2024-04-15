<template>
    <a-form ref="loginRef" :model="LoginForm" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
        autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed" :rules="rules">
        <a-form-item label="Username" name="username">
            <a-input v-model:value="LoginForm.username" autocomplete="off" />
        </a-form-item>

        <a-form-item label="Password" name="password">
            <a-input-password v-model:value="LoginForm.password" autocomplete="off" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="LoginForm.remember">记住密码</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { reqLogin } from '@/api/user/login&reg'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { SAVE_TOKEN } from '@/utils/localStorage';
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';

const loginRef = ref<FormInstance>()

interface LoginFormState {
    username: string;
    password: string;
    remember: boolean;
}

const LoginForm = reactive<LoginFormState>({
    username: 'emma',
    password: '123456',
    remember: true,
});
const validateName = (rule: any, value: string, callback: any) => {
    // console.log(callback, 'validateName')
    const regex = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,6}$/
    if (!regex.test(value)) {
        return Promise.reject(new Error('输入2-6位的用户名,只能包含字母、数字、下划线'))
    } else {
        return Promise.resolve()
    }
};
const validatePassword = (rule: any, value: string, callback: any) => {
    console.log(callback, 'validatePassword')
    const regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    if (!regex.test(value)) {
        return Promise.reject(new Error('密码至少包含数字、字母,长度6-16位'))
    } else {
        return Promise.resolve()
    }
};
const rules: Record<string, Rule[]> = {
    username: [{ required: true, validator: validateName, trigger: 'blur' }],
    password: [{ required: true, validator: validatePassword, trigger: 'blur' }]
}

const router = useRouter()
const onFinish = async (values: any) => {
    const { username: name, password } = values
    try {
        const res = await reqLogin({ name, password })
        if (res.success === 'success') {
            message.success('登录成功')
            SAVE_TOKEN('token', res.token)
            loginRef.value?.resetFields()
            router.push({
                path: '/layout'
            })
        } else {
            message.error(res.message)
        }
    } catch (error: any) {
        message.error(error.message)
    }

};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
</script>

<style scoped lang="scss"></style>

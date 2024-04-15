<template>
    <a-form ref="registerRef" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
        autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed" :rules="rules">
        <a-form-item label="Username" name="username">
            <a-input v-model:value.trim="formState.username" autocomplete="off">
                <template #prefix>
                    <UserOutlined class="sit-form-item-icon" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item label="Password" name="password">
            <a-input type="password" v-model:value.trim="formState.password" autocomplete="off">
                <template #prefix>
                    <LockOutlined class="sit-form-item-icon" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item label="rePassword" name="repassword">
            <a-input type="password" v-model:value.trim="formState.repassword" autocomplete="off">
                <template #prefix>
                    <LockOutlined class="sit-form-item-icon" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">
                Remember me
            </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
    <!-- <button @click="handleInfo">测试</button> -->
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { reqSearchOther, reqUserRegister } from '@/api/user/login&reg'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
// import { checkboxGroupProps } from 'ant-design-vue/es/checkbox';
import { message, FormInstance } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form'

const registerRef = ref<FormInstance>()

interface FormState {
    username: string
    password: string
    repassword: string
    remember: boolean
}

const formState = reactive<FormState>({
    username: 'lisa',
    password: '123456a',
    repassword: '123456a',
    remember: true,
})

// rule
const validateName = (rule: Rule, value: string) => {
    console.log(rule, value, 'validateName')
    const regex = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,6}$/
    if (!regex.test(value)) {
        return Promise.reject('2-6位用户名,只能包含字母、数字、下划线、中文')
    } else if (formState.username === '') {
        registerRef.value?.validateFields()
    } else {
        return Promise.resolve()
    }
}
const validatePassword = (rule: Rule, value: string) => {
    console.log(rule, value, 'validatePassword')
    const regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
    if (!regex.test(value)) {
        return Promise.reject('请输入6-16位的密码,字母、数字、特殊字符')
    } else if (formState.password === '') {
        registerRef.value?.validateFields()
    } else {
        return Promise.resolve()
    }
}

const validateRePassword = (rule: Rule, value: string) => {
    console.log(rule, value, 'validateRePassword')
    if (value !== formState.password) {
        return Promise.reject('两次输入的密码不一致')
    } else if (formState.repassword === '') {
        registerRef.value?.validateFields()
    } else {
        return Promise.resolve()
    }
}

const rules: Record<string, Rule[]> = {
    username: [{ required: true, validator: validateName, trigger: 'blur' }],
    password: [{ required: true, validator: validatePassword, trigger: 'blur' }],
    repassword: [{ required: true, validator: validateRePassword, trigger: 'blur' }],
}

const router = useRouter()
const onFinish = async (values: any) => {
    console.log(values, ' onFinished')
    const { username: name, password, repassword } = values
    try {
        const res = await reqUserRegister({ name, password, repassword })
        if (res.code === 200) {
            message.success('注册成功')
            router.push({
                path: '/login'
            })
        }
    } catch (error: any) {
        message.error(error.message)
    }

}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
}

// const handleInfo = async () => {
//     const res = await reqSearchOther()
//     console.log(res, 'request')
// }
</script>

<style scoped lang="scss"></style>

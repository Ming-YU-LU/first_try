<template>
    <template v-if="formState">
        <a-form-item :label="formState.payload.label">
            <template v-if="formState.type === 'input'">
                <a-input :options="formState.payload.value" v-model:value="formState.payload.value"></a-input>
            </template>
            <template v-else-if="formState.type === 'checkbox'">
                <a-checkbox-group v-model:value="formState.payload.value">
                    <a-checkbox v-for="(option, index) in formState.payload.options" :key="index"
                        :value="option.value">{{ option.label }}</a-checkbox>
                </a-checkbox-group>
            </template>
            <template v-else-if="formState.type === 'radio'">
                <a-radio-group v-model:value="formState.payload.value">
                    <a-radio v-for="(option, index) in formState.payload.options" :value="option.value" :key="index">{{
        option.label }}</a-radio>
                </a-radio-group>
            </template>
            <template v-else-if="formState.type === 'select'">
                <a-select v-model:value="formState.payload.value">
                    <a-select-option v-for="(option, index) in formState.payload.options" :key="index"
                        :value="option.value">{{ option.label }}</a-select-option>
                </a-select>
            </template>
        </a-form-item>
        <FormItemCom :formState="getNext()"></FormItemCom>
    </template>

</template>

<script setup lang="ts">
import { FormItem } from '@/methods/formItem'

const props = defineProps<{
    formState: FormItem | null
}>()
// console.log(props.formState)
function getNext(): FormItem | null {
    let current: FormItem | null = props.formState
    if (!current) {
        return null
    }
    const acients = []
    acients.unshift(current)
    while ((current = current.parent)) {
        acients.unshift(current)
    }
    // 这里调用了next方法
    return props.formState!.next(props.formState, acients)
}
defineExpose({
    name: 'FormItemCom'
})
</script>

<style scoped lang="scss"></style>

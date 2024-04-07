<template>
    <div>
        <template v-if="formState">
            <a-form-item :label="formState.payload.label">
                <template v-if="formState.type === 'input'">
                    <a-input v-model:value="formState.payload.value"></a-input>
                </template>
                <template v-else-if="formState.type === 'checkbox'">
                    <a-checkbox-group v-model:value="formState.payload.value" :options="formState.payload.options">{{
                        formState.payload.options.value }}</a-checkbox-group>
                </template>
                <template v-if="formState.type === 'select'">
                    <label id="title" :title="formState.payload.label">
                        <a-select v-model:value="formState.payload.value" :options="formState.payload.options">{{
                            }}</a-select>
                    </label>
                </template>
                <template v-else-if="formState.type === 'radio'">
                    <a-checkbox-group v-model:value="formState.payload.value" :options="formState.payload.options">{{
                        formState.payload.options.value
                        }}</a-checkbox-group>
                </template>
            </a-form-item>
            <FormItemCom :formState="getNext()"></FormItemCom>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { FormItem } from '@/methods/formData'

const props = defineProps<{
    formState: FormItem | null
}>()
// 调用这个获取下一个item
function getNext(): FormItem | null {
    // 问题是如何获取当前的信息
    let current: FormItem | null = props.formState
    if (!current) {
        return null
    }
    const ancients = []
    ancients.unshift(current)
    while ((current = current.parent)) {
        ancients.unshift(current)
    }
    return props.formState!.next(props.formState!, ancients)
}
// console.log(nextItem())
// defineExpose({
//     name: 'FormItemCom'
// })
</script>
<script lang="ts">
export default {
    name: 'FormItemCom'
}
</script>

<style scoped lang="scss">
#title {
    width: 56.5px !important;
}
</style>
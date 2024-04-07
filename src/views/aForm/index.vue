<template>
    <div>
        <formItemCom :formState="item1" ref="kid"></formItemCom>
    </div>

</template>

<script setup lang="ts">
// import { ref, nextTick } from 'vue';
import formItemCom from '@/views/aForm/formItem.vue'
import item1 from '@/methods/formItem'

// nextTick(() => {
//     console.log(kid.value)
// })
// const kid = ref()

</script>

<style scoped lang="scss"></style>

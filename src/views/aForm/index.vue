<template>
    <div>
        <formItemCom :formState="item1"></formItemCom>
    </div>
</template>

<script setup lang="ts">
import item1 from '@/methods/formPageData'
import formItemCom from './formItemCom.vue'
console.log(item1)
</script>

<style scoped lang="scss"></style>

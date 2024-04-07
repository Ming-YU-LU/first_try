import { reactive, isReactive } from "vue"
export type FormItemType = 'select' | 'input' | 'checkbox' | 'radio'

export interface FormItem {
    type: FormItemType
    payload: any
    next: (current: FormItem, ancients?: FormItem[]) => null | FormItem
    parent?: null | FormItem
}

export function createFormItem(
    formItemType: FormItem['type'],
    payload: FormItem['payload'],
    next?: FormItem['next'],
    parent?: FormItem['parent']
) {
    if (!next) {
        next = () => null
    }
    if (!parent) {
        parent = null
    }
    const nextFunc: FormItem['next'] = (current, ancients) => {
        let nextItem = next!(current, ancients)
        if (!nextItem) {
            return null
        }
        nextItem.parent = current
        console.log(nextItem, 'nextItem, ancients', ancients,)
        if (!isReactive(nextItem)) {
            nextItem = reactive(nextItem)
        }
        return nextItem
    }
    const fromItem: FormItem = reactive({
        type: formItemType,
        payload,
        next: nextFunc,
        parent
    })
    return fromItem
}
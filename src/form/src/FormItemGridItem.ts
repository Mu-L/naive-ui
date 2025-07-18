import type { ExtractPublicPropTypes } from '../../_utils'
import type { FormItemInst } from './interface'
import { defineComponent, h, ref } from 'vue'
import { keep, keysOf } from '../../_utils'
import NGridItem, {
  gridItemPropKeys,
  gridItemProps
} from '../../grid/src/GridItem'
import NFormItem, { formItemPropKeys, formItemProps } from './FormItem'

export const formItemGiProps = {
  ...gridItemProps,
  ...formItemProps
} as const

export const formItemGiPropKeys = keysOf(formItemGiProps)

export type FormItemGiProps = ExtractPublicPropTypes<typeof formItemGiProps>

export default defineComponent({
  __GRID_ITEM__: true,
  name: 'FormItemGridItem',
  alias: ['FormItemGi'],
  props: formItemGiProps,
  setup() {
    const formItemInstRef = ref<FormItemInst | null>(null)
    const validate = ((...args: any[]) => {
      const { value } = formItemInstRef
      if (value) {
        return value.validate(...args)
      }
    }) as FormItemInst['validate']
    const restoreValidation: FormItemInst['restoreValidation'] = () => {
      const { value } = formItemInstRef
      if (value) {
        value.restoreValidation()
      }
    }
    return {
      formItemInstRef,
      validate,
      restoreValidation
    }
  },
  render() {
    return h(NGridItem, keep(this.$.vnode.props || {}, gridItemPropKeys), {
      default: () => {
        const itemProps = keep(this.$props, formItemPropKeys)
        return h(
          NFormItem,
          {
            ref: 'formItemInstRef',
            ...itemProps
          },
          this.$slots
        )
      }
    })
  }
})

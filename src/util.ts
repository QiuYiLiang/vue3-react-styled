import { defineComponent, h, VNode } from "vue";

export function FC<T = any>(fn: (props: T) => () => VNode) {
  return (props: T) => h(defineComponent(() => fn(props)));
}

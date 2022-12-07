import { ref } from "vue";
import { FC } from "./util";

interface Comp1Props {
  msg: string;
}

export const Comp1 = FC<Comp1Props>(({ msg }) => {
  let count = ref(0);
  console.log(count);

  return () => (
    <h1>
      {msg}
      <button
        onClick={() => {
          console.log(count);
          count.value++;
        }}
      >
        {count.value}
      </button>
    </h1>
  );
});

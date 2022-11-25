import { FC } from "./util";

interface Comp1Props {
  msg: string;
}

export const Comp1 = FC<Comp1Props>(({ msg }) => {
  let count = $ref(0);

  return () => (
    <h1>
      {msg}
      <button
        onClick={() => {
          count++;
        }}
      >
        {count}
      </button>
    </h1>
  );
});

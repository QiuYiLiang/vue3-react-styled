import { FC } from "./util";
import { Comp1 } from "./Comp1";

// declare const RefSymbol: unique symbol;
// const a = {
//   [RefSymbol]: true,
// };
// console.log(a);

export const App = FC(() => {
  return () => <Comp1 msg={"hi"} />;
});

import { FC } from "./util";
import { Comp1 } from "./Comp1";

export const App = FC(() => {
  return () => <Comp1 msg={"hi"} />;
});

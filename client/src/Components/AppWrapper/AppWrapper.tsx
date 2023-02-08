import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const styles: CSSProperties = {
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
  overflowY: "hidden",
  margin: 0,
  padding: 0,
};
const AppWrapper = (props: Props) => {
  return <div style={styles}>{props.children}</div>;
};

export default AppWrapper;

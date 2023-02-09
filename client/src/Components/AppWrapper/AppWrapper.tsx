import { Box, styled } from "@mui/material";
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

const AppWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
  overflowY: "hidden",
  margin: 0,
  padding: 0,
}));

export default AppWrapper;

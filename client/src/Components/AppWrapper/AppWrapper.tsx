import { Box, styled } from "@mui/material";

const AppWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100vh",
  width: "100vw",
  minHeight: "100vh",
  minWidth: "100vw",
  overflowX: "hidden",
  overflowY: "hidden",
  margin: 0,
  padding: 0,
  position: "relative",
}));

export default AppWrapper;

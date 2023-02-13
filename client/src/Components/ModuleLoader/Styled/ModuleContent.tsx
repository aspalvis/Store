import { Box, lighten, styled } from "@mui/material";

export const ModuleContent = styled(Box)(({ theme }) => ({
  backgroundColor: lighten(theme.palette.background.default, 0.2),
  width: "100%",
  height: "100%",
  maxHeight: "100%",
}));

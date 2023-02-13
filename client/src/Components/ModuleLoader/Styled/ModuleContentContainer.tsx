import { Box, lighten, styled } from "@mui/material";

export const ModuleContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: lighten(theme.palette.background.default, 0.2),
  height: "calc(100% - 50px)",
  maxHeight: "calc(100% - 50px)",
  display: "flex",
}));

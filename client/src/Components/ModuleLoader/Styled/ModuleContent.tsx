import { Box, styled } from "@mui/material";

export const ModuleContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100%",
  height: "calc(100% - 50px)",
  maxHeight: "calc(100% - 50px)",
}));

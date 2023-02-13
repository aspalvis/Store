import { Box, lighten, styled } from "@mui/material";

export const ModuleSideBar = styled(Box)(({ theme }) => ({
  height: "100%",

  backgroundColor: lighten(theme.palette.background.default, 0),
}));

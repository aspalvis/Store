import { Box } from "@mui/material";
import { styled } from "@mui/material";
export const Topbar = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100%",
  height: "50px",
  display: "flex",
}));

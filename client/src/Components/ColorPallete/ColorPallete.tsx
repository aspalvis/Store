import { Button, Input, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { app } from "../../App/store";
import { observer } from "mobx-react";

const ColorPallete = () => {
  if (!app.theme.isPaletteOpened) {
    return <></>;
  }
  return (
    <Table
      sx={{
        position: "absolute",
        zIndex: 9999,
        width: "auto",
        background: "white",
        borderRadius: "15px",
        left: 0,
        right: 0,
        top: "20%",
        margin: "auto",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>Primary</TableCell>
          <TableCell>Secondary</TableCell>
          <TableCell>Typography</TableCell>
          <TableCell>
            <Button
              variant="contained"
              onClick={() => {
                app.theme.isPaletteOpened = false;
              }}
            >
              Close
            </Button>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <Input
              value={app.theme.ColorPrimary}
              onChange={(e) => {
                app.theme.ColorPrimary = e.target.value;
              }}
            />
          </TableCell>
          <TableCell>
            <Input value={app.theme.ColorSecondary} onChange={(e) => (app.theme.ColorSecondary = e.target.value)} />
          </TableCell>
          <TableCell>
            <Input
              value={app.theme.ColorBackgroundPaper}
              onChange={(e) => (app.theme.ColorBackgroundPaper = e.target.value)}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default observer(ColorPallete);

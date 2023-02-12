import { Button, Input, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { observer } from "mobx-react";
import { themes } from "../../Styles/Themes";

const ColorPallete = () => {
  if (!themes.isPaletteOpened) {
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
          <TableCell>Background</TableCell>
          <TableCell>Text</TableCell>
          <TableCell>
            <Button
              variant="contained"
              onClick={() => {
                themes.isPaletteOpened = false;
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
              value={themes.colors.primary}
              onChange={(e) => {
                themes.colors.primary = e.target.value;
              }}
            />
          </TableCell>
          <TableCell>
            <Input value={themes.colors.secondary} onChange={(e) => (themes.colors.secondary = e.target.value)} />
          </TableCell>
          <TableCell>
            <Input
              value={themes.colors.background.main}
              onChange={(e) => (themes.colors.background.main = e.target.value)}
            />
          </TableCell>
          <TableCell>
            <Input value={themes.colors.text.main} onChange={(e) => (themes.colors.text.main = e.target.value)} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export default observer(ColorPallete);

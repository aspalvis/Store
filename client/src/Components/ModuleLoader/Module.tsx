import MenuIcon from "@mui/icons-material/Menu";
import { ModuleObject } from "./Utils";
import { Topbar } from "../Topbar/Topbar";
import IconButton from "@mui/material/IconButton";
import { ModuleContent } from "./Styled/ModuleContent";
import { ModuleContainer } from "./Styled/ModuleContainer";
import { observer } from "mobx-react";
import { ModuleSideBar } from "./Styled/ModuleSideBar";
import { ModuleContentContainer } from "./Styled/ModuleContentContainer";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface Props {
  initialData: ModuleObject;
  children?: ReactNode;
}

const ModuleComponent = (props: Props) => {
  const { initialData, children = <Outlet /> } = props;

  return (
    <ModuleContainer>
      <Topbar>
        <IconButton onClick={initialData.onClickMenu}>
          <MenuIcon color="secondary" />
        </IconButton>
        <div className="fd-row" style={{ gap: "40px" }}>
          {initialData.links}
        </div>
      </Topbar>
      <ModuleContentContainer>
        <ModuleSideBar sx={{ width: initialData.sidebarWidth }}>{initialData.links}</ModuleSideBar>
        <ModuleContent>{children}</ModuleContent>
      </ModuleContentContainer>
    </ModuleContainer>
  );
};

export const Module = observer(ModuleComponent);

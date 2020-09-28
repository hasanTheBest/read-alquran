import React, { useContext } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Book, SettingsApplications } from "@material-ui/icons";
import { SettingContext } from "../../Context/SettingsContext";

const Settings = () => {
  const { handleOpenDrawer } = useContext(SettingContext);

  return (
    <Tooltip title="Open Settings">
      <IconButton
        aria-label="button"
        color="inherit"
        onClick={handleOpenDrawer}
      >
        <SettingsApplications />
      </IconButton>
    </Tooltip>
  );
};

export default Settings;

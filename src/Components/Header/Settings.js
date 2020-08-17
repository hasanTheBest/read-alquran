import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { SettingsApplications } from "@material-ui/icons";

const Settings = () => {
  const openSettings = () => {
    console.log("Open Settings");
  };

  return (
    <div>
      <Tooltip title="Open Settings">
        <IconButton aria-label="button" color="inherit" onClick={openSettings}>
          <SettingsApplications />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Settings;

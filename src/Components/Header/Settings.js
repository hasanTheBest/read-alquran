import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { SettingsApplications } from "@material-ui/icons";
import { SettingContext } from "../../Context/SettingsContext";

const Settings = () => {
  const { setDrawerMobileOpen } = React.useContext(SettingContext);

  const toggleSetting = () => {
    setDrawerMobileOpen();
  };

  return (
    <>
      <div>
        <Tooltip title="Open Settings">
          <IconButton
            aria-label="button"
            color="inherit"
            onClick={toggleSetting}
          >
            <SettingsApplications />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default Settings;

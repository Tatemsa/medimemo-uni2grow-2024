import React  from "react";
import {IconButton, Typography,  Box} from "@mui/material";

function  AppNavigation(){
    return (
        <div className="footer-therapie">
        <div className="end">
          <Box className="nav">
            <div className="button-nav">
              <IconButton>
                <img width={24} height={24} alt="" src={home} />
              </IconButton>
            </div>
            <Typography className="typography-nav">Medications</Typography>
          </Box>
          <Box className="nav">
            <div className="over">
              <IconButton>
                <img width={24} height={24} alt="" src={prescription} />
              </IconButton>
            </div>
            <Typography className="typography-over">Therapies</Typography>
          </Box>
          <Box className="nav">
            <div className="button-nav">
              <IconButton>
                <img width={24} height={24} alt="" src={contact} />
              </IconButton>
            </div>
            <Typography className="typography-nav">Contacts</Typography>
          </Box>
        </div>
      </div>
    );
}

export default AppNavigation;
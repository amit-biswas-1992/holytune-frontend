import React, { useEffect, useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from '@mui/icons-material/Home';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import SegmentIcon from '@mui/icons-material/Segment';
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";

import style from "./header.module.css";
const useStyles = makeStyles({
  root: {
    // width: "100%",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
});

export default function BottomHeader() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  console.log(value, "router value");

  const navigate = useRouter();


  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    navigate.push(value);
  }, [value]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99999 }}
      elevation={2}
    >
      <BottomNavigation
        defaultValue="/"
        value={value}
        onChange={handleChange}
        showLabels
      //  className={classes.root}
      // className={` ${classes.root} `}
      >
        {" "}
        <BottomNavigationAction label="Home" value="/home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Audio Track"
          value="/all_musics"
          icon={<AudiotrackIcon />}
        />
        <BottomNavigationAction
          label="Video Track"
          value="/all_videos"
          icon={<PlayArrowIcon />}
        />
        <BottomNavigationAction
          label="Files"
          value="/profile"
          icon={<FileOpenIcon />}
        />
        <BottomNavigationAction
          label="Package"
          value="/package"
          icon={<SegmentIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

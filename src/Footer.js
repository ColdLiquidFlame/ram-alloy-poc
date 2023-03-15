import Box from "@mui/material/Button";
import React from 'react';

import { makeStyles, createStyles} from "@mui/styles";
// import {theme} from './theme';
const useStyles = makeStyles((theme) => createStyles({
  Box: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor:'#000000', height:'200px' },
}));
const styles = {
  footer:{
      backgroundColor:'grey'
  }
}
const footer = () => {
  const classes = useStyles();

  return (
    <div className="footer" style={styles.footer}>
      <Box className={classes.Box}></Box>
    </div>
  );
};

export default footer;
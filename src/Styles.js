import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  buttons:{
    marginTop:'20px',
    backgroundColor: "black",
    color: 'white',
    textTransform: 'uppercase',
    width: '150px',
    height: '50px',
    display: 'block',
    variant: 'contained',
  },
  grid:{
    height: '600px',
    paddingLeft: '50px',
    width: '100%', 
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'grid',
    paddingBottom: '50px',
    paddingRight: '50px' ,
    paddingTop: '50px'
  },
  appbar:{
    position:'static'

  },
  box:{
    flexGrow: 1, 
    display: { xs: "none", md: "flex"}
     

  },
  toolbar:{
    p:"100px"

  },
  IconButton:{

  },
  textfield:{
    variant:"filled",
    size:"large",
    color:"primary",
    backgroundColor: "lightgrey",
    marginBottom: 20,
  },

}));

export default useStyles;
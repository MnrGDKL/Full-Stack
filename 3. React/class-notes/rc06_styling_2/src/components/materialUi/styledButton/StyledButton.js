import {Button} from '@mui/material';
import {makeStyles} from '@mui/styles';

const myStyle = makeStyles({
  btn: {
    backgroundColor: '#f50057',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#f50057',
      color: '#fff',
    },
  }
});

const StyledButton = () =>{
  const classes = myStyle();

  return (
      <Button className={classes.btn}>My Button </Button>
  );
}

export default StyledButton;
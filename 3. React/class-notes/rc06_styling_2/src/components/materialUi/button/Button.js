import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function BasicButtons() {
  return (
    <>
      {/* <Button variant="contained" color='secondary'>SAVE</Button>
      <br /> <br />
      <Button variant="contained" color='primary' size="large" >SAVE</Button>
      <br /> <br />
      <Button variant="outlined" startIcon={<DeleteIcon />} size="large">
        Delete
      </Button>
      <Button variant="contained" endIcon={<SaveIcon />} size="large">
        Save
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} size="large">
        Send
      </Button>
      <br /> <br /> */}
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" required/>
      <TextField id="outlined-basic" label="Surname" variant="outlined" required/>
      <TextField id="outlined-basic" label="Address" variant="outlined" required multiline/>

    </Box>
    </>
  );
}
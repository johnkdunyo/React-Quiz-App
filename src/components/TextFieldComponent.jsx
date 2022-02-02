import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAmountQuestions } from '../redux/actions';

const TextFieldComponent = () => {

  const dispatch = useDispatch();

    const handleChange = (e) => {
      dispatch(handleAmountQuestions(e.target.value))
    }




  return (
      <Box mt={3} width='100%'>
          <FormControl fullWidth size='small'>
              <TextField 
                onChange={(e) => handleChange(e)}
                label='Amount of Questions'
                type='number'
                size='small'
              />
          </FormControl>
      </Box>
  );
};

export default TextFieldComponent;

import { Button, CircularProgress, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectField from '../components/SelectField';
import TextFieldComponent from '../components/TextFieldComponent';
import useAxios from '../hooks/useAxios';

const Settings = () => {

  const navigate = useNavigate();

  const { response, error} = useAxios({url: '/api_category.php'});


  if (!response){
    return (
      <Box mt={20}>
          <CircularProgress />
      </Box>
    );
  };


  if (error){
    return (
      <Typography variant='h6' mt={20} color ='red'>
        Something went wrong
      </Typography>
    )
  }



  //console.log(response)
  //console.log( JSON.stringify(response.trivia_categories))


  const difficultyOptions = [
    { id: 'easy', name: 'Easy'},
    { id: 'medium', name: 'Medium'},
    { id: 'hard', name: 'Hard'}
  ]


  const typeOptions = [
    {id: 'multiple', name: 'Multiple'},
    {id: 'boolean', name: 'True/False'}
  ]

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/questions');
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <SelectField options={response.trivia_categories} label='Category' />
      <SelectField options={difficultyOptions} label='Difficulty' />
      <SelectField options={typeOptions} label='Type' />
      <TextFieldComponent />
      <Box mt={3} width='100%'>
          <Button fullWidth variant='contained' type='submit'>
            Get Started
          </Button>
      </Box>
    </form>
  );
};

export default Settings;

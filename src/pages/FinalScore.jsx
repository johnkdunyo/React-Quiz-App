import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from '../redux/actions';


const FinalScore = () => {

  const { score } = useSelector(state=> state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(handleScoreChange(0));
    navigate('/')

  } 

  return (
      <Box mt={30}>
        <Typography variant='h3' fontWeight='bold' mb={3}>Final Score {score} </Typography>
        <Button variant='outlined' onClick={handleButtonClick}>Home</Button>
      </Box>
  );
};

export default FinalScore;

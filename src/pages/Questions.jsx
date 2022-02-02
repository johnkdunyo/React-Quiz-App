import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Box } from '@mui/system';
import { Button, CircularProgress, Typography } from '@mui/material';
import useAxios from '../hooks/useAxios';
import { useDispatch } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import { decode } from 'html-entities';


const getMax = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {

  const { 

    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score

  } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(question_category, question_difficulty, question_type, amount_of_question, score)

  let apiUrl = `/api.php?amount=${amount_of_question}&category=${question_category}&difficulty=${question_difficulty}&type=${question_type}`;

  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  const { response,  error} = useAxios({url: apiUrl });

  const [ questionIndex, setQuestionIndex ] =  useState(0);
  const [options, setOptions ] = useState([]);

  console.log(options)


  useEffect(() => {
    if(response?.results.length){
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers]
      answers.splice(
        getMax(question.incorrect_answers.length),
        0,
        question.correct_answer
      )
      setOptions(answers)
      console.log(question.correct_answer)
    }  
 
  }, [questionIndex, response]);
  

  
  
  
  
  //console.log(response?.results)

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

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(score+1));
      
    }
    if(questionIndex +1 < response.results.length){
      setQuestionIndex(questionIndex +1);
    } else {
      navigate('/score')
    }
  }


  return (
  <Box>
    <Typography variant='h4'>Questions {questionIndex +1 }</Typography>
    <Typography mt={5}>{decode(response?.results[questionIndex].question)}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id} width='100%'>
          <Button  onClick={handleClickAnswer } variant='contained'>{decode(data)}</Button>
        </Box>
      ))}

    <Box mt={5}>Score: {score}/ {response.results.length} </Box>
  </Box>
  );
};

export default Questions;

import React , {useState} from 'react';
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';

const SelectField = (props) => {

    const {label, options}= props;
    const dispatch = useDispatch();

    //console.log(options)

    const [value, setValue ] = useState('');

    const handleOnchange = (val) => {
        //console.log(val);
        setValue(val);
        switch (label) {
            case 'Category':
                dispatch(handleCategoryChange(val));
                break;

            case 'Difficulty':
                dispatch(handleDifficultyChange(val));
                break;
            
            case 'Type':
                dispatch(handleTypeChange(val));
                break;
            
            default:
                return;
                
        }
        
    }


  return (
    <Box mt={3} width='100%'>
        <FormControl size='small' fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={(e) => handleOnchange(e.target.value)}>
                {options?.map((option) => (
                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                ))}
            </Select>
        </FormControl>

    </Box>
  );
};

export default SelectField;

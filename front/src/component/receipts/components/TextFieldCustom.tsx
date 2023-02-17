import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const TextFieldCustom = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    display: 'none',
  },
  '& .MuiInput-root': {
    width: 422,
    height: 71,
    borderRadius: 10,
    position: 'relative',
    background: '#FFFFFF',
    fontSize: 16,
    marginTop: 0,
    padding: '18px 16px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '& .MuiInput-input': {
      fontSize: 17,
      lineHeight: 22,
      color: 'red',
      padding: 0,
    },
    '&.Mui-focused': {
      border: '1px solid rgba(0, 0, 0, 0.87)',
      background: 'white',
    },
  },
}));
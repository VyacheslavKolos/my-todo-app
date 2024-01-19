import { Box, Button, TextField } from '@mui/material';
import { FC, useState } from 'react';

type Props = {
  createTodo: (todo: string) => void;
};
const InputField: FC<Props> = ({ createTodo }) => {
  const [todo, setTodo] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleCreate = () => {
    createTodo(todo);
    setTodo('');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        value={todo}
        onChange={handleChange}
        sx={{ width: 500 }}
      />
      <Button
        variant="contained"
        sx={{ bgcolor: '#5865F2' }}
        disabled={!todo}
        onClick={handleCreate}
      >
        Add todoo
      </Button>
    </Box>
  );
};

export default InputField;

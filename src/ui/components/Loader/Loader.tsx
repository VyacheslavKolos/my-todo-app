import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

const Loader = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Typography variant="caption">Info is loading...</Typography>
    <CircularProgress color="secondary" />
  </Box>
);

export default Loader;

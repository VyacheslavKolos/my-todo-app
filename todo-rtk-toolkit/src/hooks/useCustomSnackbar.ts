import { useSnackbar } from 'notistack';
import { SnackbarTypes } from '../constants/types.ts';

const UseCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const callSnackbar = (title: string, variant: SnackbarTypes) => {
    enqueueSnackbar(title, {
      variant,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
    });
  };
  return { callSnackbar };
};

export default UseCustomSnackbar;

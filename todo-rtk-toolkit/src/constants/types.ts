import { ReactNode } from 'react';

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export type Children<T = ReactNode> = {
  children: T;
};

export type CustomModalProps = Children & {
  open: boolean;
  handleClose: () => void;
  title?: string;
  modalStyles?: { [key: string]: string | number };
};

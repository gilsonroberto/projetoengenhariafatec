import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function ModalExcluir(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const excluir = () => {

  }

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        aria-labelledby="excluir"
      >
        <DialogTitle id="excluir">
          {"Excluir"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja excluir este item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Não
          </Button>
          <Button onClick={handleClose} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

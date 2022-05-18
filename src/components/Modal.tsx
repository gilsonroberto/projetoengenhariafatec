import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, Divider, FormControl, Grid, IconButton, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from "../styles/makeStyles";
import SendIcon from '@mui/icons-material/Send';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

const arrayCategorias = [
  { id: 1, nome: 'Lapis' },
  { id: 2, nome: 'Caderno' },
  { id: 3, nome: 'Papel' },
  { id: 4, nome: 'Caneta' },
  { id: 5, nome: 'Frances' },
  { id: 6, nome: 'Roxie' },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function DialogModal() {
  const [open, setOpen] = React.useState(false);
  const [categoria, setCategoria] = React.useState<string[]>([]);
  const [listaCategorias, setListaCategorias] = React.useState(arrayCategorias);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent<typeof categoria>) => {
    const {
      target: { value },
    } = event;
    setCategoria(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [formState, setFormState] = React.useState({
    Codigo: "",
    Nome: "",
    Quantidade: 0,
    Valor: 0,
  });

  const seStateValues = (event: any) => {
    var nam = event.target.name;
    var val = event.target.value;
    setFormState({ ...formState, [nam]: val });
  };


  // const popularCategorias = async () => {
  //   setListaCategorias(arrayCategorias);
  // }

  function campo(name: string, label: string) {
    return (
      <TextField
        fullWidth
        helperText=""
        id="demo-helper-text-aligned-no-helper"
        label={label}
        name={name}
        onChange={seStateValues}
      />
    )
  }

  console.log("Form", formState);

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={open}
        className={classes.dialogForm}
        aria-labelledby="draggable-dialog-title"
        fullWidth
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Novo Produto
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              {/* <TextField
                fullWidth
                helperText=""
                id="demo-helper-text-aligned-no-helper"
                label="Código"
                name="Codigo"
                onChange={seStateValues}
              /> */}
              {campo("Codigo", "Código")}
            </Grid>
            <Grid item xs={12} lg={8}>
              {/* <TextField
                fullWidth
                helperText=""
                id="demo-helper-text-aligned-no-helper"
                label='Nome'
                name="Nome"
                onChange={seStateValues}
              /> */}
              {campo("Nome", "Nome")}
            </Grid>
            <Grid item xs={12} lg={8}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">Categoria</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={categoria}
                  onChange={handleChange}
                  input={<OutlinedInput label="categoria" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {listaCategorias.map((cat: any) => (
                    <MenuItem key={cat.id} value={cat.nome}>
                      <Checkbox checked={categoria.indexOf(cat.nome) > -1} />
                      <ListItemText primary={cat.nome} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={4}>
              {/* <TextField
                fullWidth
                helperText=""
                id="demo-helper-text-aligned-no-helper"
                label='Quantidade'
                name="Quantidade"
                onChange={seStateValues}
              /> */}
              {campo("Quantidade", "Quantidade")}
            </Grid>
            <Grid item xs={12} lg={4}>
              {/* <TextField
                fullWidth
                helperText=""
                id="demo-helper-text-aligned-no-helper"
                label='R$'
                name="Valor"
                onChange={seStateValues}
              /> */}
              {campo("Valor", "Valor")}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button variant="contained" onClick={handleClose} endIcon={<DoDisturbIcon />}>
            Cancelar
          </Button>
          <Button onClick={handleClose} variant="contained" endIcon={<SendIcon />}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
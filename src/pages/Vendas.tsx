import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AdicionarProduto from "../components/AdicionarProd";
import EditarProduto from "../components/EditarProd";
import ModalExcluir from "../components/ModalExcluir";
import { NavMenu } from "../components/NavMenu";
import TableCustom from "../components/TableCustom";
import SearchIcon from '@mui/icons-material/Search';
import { columnsSales, rowSales } from "../initial-state/dataSales";
import AdicionarVenda from "../components/AdicionarVenda";

export function Vendas() {
  return (
    <div>
      <NavMenu />
      <div className="container">
        <div className="busca">
          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="center"
            direction="row"
          >
            <Grid item xs={5}>
              <Box pl={9}>
                <FormControl variant="outlined" fullWidth size="small" >
                  <InputLabel>Buscar</InputLabel>
                  <OutlinedInput
                    label="Buscar"
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon
                          ></SearchIcon>
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box pr={9}
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                }}>
                <ModalExcluir />
                <EditarProduto />
                <AdicionarVenda />
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="title-insert border-product">
          <p>Vendas</p>
        </div>
        <div className="row ">
          <TableCustom
            row={rowSales}
            column={columnsSales}
            design={'product'}
          />
        </div>
      </div>
    </div>
  )
}

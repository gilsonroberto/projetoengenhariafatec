import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AdicionarProduto from "../components/AdicionarProd";
import AdicionarVenda from "../components/AdicionarVenda";
import EditarProduto from "../components/EditarProd";
import ModalExcluir from "../components/ModalExcluir";
import { NavMenu } from "../components/NavMenu";
import TableCustom from "../components/TableCustom";
import { columnsSales, rowSales } from '../initial-state/dataSales'

export function Vendas() {
  return (
    <div>
      <NavMenu />
      <div className="container">
        <Grid container direction="row">
          <Grid item xs={6}>
            <Box pl={9} pb={1}>
              <Typography variant={"h4"} style={{fontWeight:"bold"}}>Vendas</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box pr={9}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
              }}>
              <ModalExcluir />
              <EditarProduto/>
              <AdicionarVenda />
            </Box>
          </Grid>
        </Grid>
        <div className="row">
          <TableCustom
            row={rowSales}
            column={columnsSales}
            design = {" "}
          />
        </div>
      </div>
    </div>
  )
}

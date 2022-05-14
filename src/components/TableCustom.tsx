import { Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/table.scss'

interface Props {
  column: any[];
  row: any[];
}

export default function DataTable({column, row}: Props) {
  return (
    <div className='table-settings'>
      <DataGrid
        rows={row}
        columns={column}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

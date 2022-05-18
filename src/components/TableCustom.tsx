import { DataGrid } from '@mui/x-data-grid';
import '../styles/table.scss'

interface Props {
  column: any[];
  row: any[];
  design: string;
}

export default function DataTable({column, row, design}: Props) {
  return (
    <div className={`table-settings border-${design}`}>
      <DataGrid
        rows={row}
        columns={column}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

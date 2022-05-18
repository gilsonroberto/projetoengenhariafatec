import { GridColDef } from "@mui/x-data-grid"

const columnsSales: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'cliente', headerName: 'Cliente', flex: 35},
    { field: 'produto', headerName: 'Produto', flex: 15 },
    { field: 'quantity', headerName: 'Quantidade', flex: 15 },
    { field: 'value', headerName: 'Valor Unit', flex: 15 },
]

const rowSales = [
    { id:1, cliente: 'Ana Lucia', produto: 'Caderno Vingadores', quantidade: 1, value: 'R$ 10,00' },
    { id:2, cliente: 'Ana Lucia', produto: 'Caneta Bic', quantity: 1, value: 'R$ 2,10' },
    { id:3, cliente: 'Ana Lucia', produto: 'Caneta hidrográfica 0,3mm 6 cores', quantity: 1, value: 'R$ 3,90' },
    { id:4, cliente: 'Ana Lucia', produto: 'Tinta acrilica p/ tela c/20ml conjunto c/8 cores 13108 Acrilex CX 1 ET', quantity: 1, value: 'R$ 10,00' },
    { id:5, cliente: 'Ana Lucia', produto: 'Papel monolucido 80g pardo 66x96 202-1 On Paper RL 2 FL', quantity: 1, value: 'R$ 7,70' },
    { id:6, cliente: 'Ana Lucia', produto: 'Canetinha Vai e Vem 24 cores Faber-Castell BT 1 UN', quantity: 1, value: 'R$ 42,90' },
    { id:7, cliente: 'Ana Lucia', produto: 'MArquivo médio preto p/pastas suspensas 70122 Ordene PT 1 UN', quantity: 1, value: 'R$ 58,50' },
    { id:8, cliente: 'Ana Lucia', produto: 'Mochila Hello Kit', quantity: 1, value: 'R$ 10,00' }

]

export { columnsSales, rowSales}
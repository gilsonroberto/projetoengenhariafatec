import { GridColDef } from "@mui/x-data-grid"

const columnsProduct: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Nome', flex: 35},
    { field: 'category', headerName: 'Categoria', flex: 15 },
    { field: 'quantity', headerName: 'Quantidade Disponível', flex: 15 },
    { field: 'value', headerName: 'Valor Unit', flex: 15 },
]

const rowsProduct = [
    { id:1, name: 'Caderno Vingadores', category: 'Caderno', quantity: 35, value: 'R$ 10,00' },
    { id:2, name: 'Caneta Bic', category: 'Produto', quantity: 120, value: 'R$ 44,10' },
    { id:3, name: 'Caneta hidrográfica 0,3mm 6 cores', category: 'Produto', quantity: 35, value: 'R$ 49,90' },
    { id:4, name: 'Tinta acrilica p/ tela c/20ml conjunto c/8 cores 13108 Acrilex CX 1 ET', category: 'Arte', quantity: 78, value: 'R$ 10,00' },
    { id:5, name: 'Papel monolucido 80g pardo 66x96 202-1 On Paper RL 2 FL', category: 'Embalagens', quantity: 72, value: 'R$ 7,70' },
    { id:6, name: 'Canetinha Vai e Vem 24 cores Faber-Castell BT 1 UN', category: 'Escolar', quantity: 110, value: 'R$ 42,90' },
    { id:7, name: 'MArquivo médio preto p/pastas suspensas 70122 Ordene PT 1 UN', category: 'Escritório', quantity: 15, value: 'R$ 58,50' },
    { id:8, name: 'Mochila Hello Kit', category: 'Objetos', quantity: 35, value: 'R$ 10,00' }

]

export { columnsProduct, rowsProduct}
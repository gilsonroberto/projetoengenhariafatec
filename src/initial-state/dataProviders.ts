const columnsProviders = [
    { field: 'id', headerName: 'Código', width: 60 },
    { field: 'name', headerName: 'Nome', flex: 15},
    { field: 'email', headerName: 'Email', flex: 15 },
]


const tableProviders = [
    { 
        id: 1,
        name: 'Empresa Fornecedora de papeis',
        email: 'email@email.com',
    },
]

export { tableProviders, columnsProviders}

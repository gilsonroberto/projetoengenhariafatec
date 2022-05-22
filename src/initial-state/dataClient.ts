const columnsClient = [
    { field: 'id', headerName: 'Código', width: 60 },
    { field: 'name', headerName: 'Nome', flex: 15},
    { field: 'city', headerName: 'Cidade', flex: 15 },
    { field: 'tel', headerName: 'Telefone', flex: 15 },
]


const tableClient = [
    { 
        id: 1,
        name: 'Bruno',
        surname: 'Garcia',
        address: 'R Miosotis, 315',
        district: 'Jd das Flores',
        city: 'Osasco',
        state: 'São Paulo',
        cep: '06110230',
        tel: '11912345678'
    },
]

export { tableClient, columnsClient}


import React, {useState} from 'react'
import { NavMenu } from '../components/NavMenu'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import ufMenu from '../initial-state/ufMenu'
import { columnsClient, tableClient } from '../initial-state/dataClient'
import TableCustom from "../components/TableCustom";


export function Client() {
  const [currency, setCurrency] = useState('');
  const [cod, setCod] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [tel, setTel] = useState('');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleCod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCod(event.target.value);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleDistrict = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistrict(event.target.value);
  };

  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleTel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value);
  };

  const insert = [
    { 
      id: null,
      name: name,
      surname: surname,
      address: address,
      district: district,
      city: city,
      state: currency,
      cep: cep,
      tel: tel
    }
  ]

  const handleInsert = () => {
    //verificar como sera feita chamada para o banco mas sera passado o const insert com todos dados da tela 
  }

  return (
    <div>
      <NavMenu />
      <div className="container-client">
        <div className="title-clients border-clients">
          <div className='row'>
            <p>Clientes</p>
          </div>
          <div className="border-clients">
            <div className="row ">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 3, width: '8ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField 
                  label="Código" 
                  variant="standard" 
                  value={cod}
                  onChange={handleCod}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 3, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField 
                  label="Nome" 
                  variant="standard"
                  value={name}
                  onChange={handleName} 
                />
                <TextField 
                  label="Sobrenome" 
                  variant="standard"
                  value={surname}
                  onChange={handleSurname} 
                />
              </Box>
            </div>
            <div className="row "> 
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 3, width: '38ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField 
                  label="Endereço" 
                  variant="standard"
                  value={address}
                  onChange={handleAddress} 
                />
                <TextField 
                  label="Bairro" 
                  variant="standard"
                  value={district}
                  onChange={handleDistrict} 
                />
              </Box>
            </div>
            <div className="row ">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 3, width: '17ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField 
                  label="Cidade" 
                  variant="standard"
                  value={city}
                  onChange={handleCity} 
                />
                <TextField
                  select
                  label="Estado"
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="standard"
                >
                  {ufMenu.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField 
                  label="CEP" 
                  variant="standard"
                  value={cep}
                  onChange={handleCep}
                />
                <TextField 
                  label="Telefone" 
                  variant="standard"
                  value={tel}
                  onChange={handleTel}
                />
              </Box>              
            </div>
          </div>
          <div className='row'>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 3, width: '38ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <button>Cadastrar</button>
            </Box>
          </div>
        </div>
        <div className="row ">
          <TableCustom
            row={tableClient}
            column={columnsClient}
            design={'clients'}
          />
        </div>
      </div>
    </div>
  )
}

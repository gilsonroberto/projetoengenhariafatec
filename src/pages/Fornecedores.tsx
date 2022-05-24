import {useState} from 'react'
import { NavMenu } from '../components/NavMenu'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import TableCustom from '../components/TableCustom';
import { columnsProviders, tableProviders } from '../initial-state/dataProviders';

export function Fornecedores() {
  const [codProviders, setCodProviders] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [nameFactory, setNameFactory] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleCodProviders = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodProviders(event.target.value);
  };

  const handleCnpj = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(event.target.value);
  };

  const handleNameFactory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameFactory(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };


  return (
      <div>
        <NavMenu />
        <div className="container-client">
            <div className="title-insert border-providers">
                <div className='row'>
                    <p>Fornecedores</p>
                </div>
                <div className="box border-providers">
                    <div className="row">
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
                                value={codProviders}
                                onChange={handleCodProviders}
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 3, width: '20ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                label="CNPJ" 
                                variant="standard"
                                value={cnpj}
                                onChange={handleCnpj} 
                            />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 3, width: '45ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                          <TextField 
                              label="Empresa" 
                              variant="standard"
                              value={nameFactory}
                              onChange={handleNameFactory}
                          />
                        </Box>
                    </div>
                    <div className='row'>
                        <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 3, width: '35ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                label="Telefone" 
                                variant="standard"
                                value={telefone}
                                onChange={handleTelefone} 
                            />
                            <TextField 
                                label="E-mail" 
                                variant="standard" 
                                value={email}
                                onChange={handleEmail}
                            />
                            <TextField 
                                label="Endereço" 
                                variant="standard"
                                value={address}
                                onChange={handleAddress} 
                            />
                        </Box>                        
                    </div>
                    <div className='row'>
                        <Box
                            component="form"
                            sx={{
                            '& > :not(style)': { m: 3, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <button>Cadastrar</button>
                        </Box>
                    </div>                         
                </div>
            </div>
            <div style={{ paddingTop: '19rem' }} className='row'>
                <TableCustom
                    row={tableProviders}
                    column={columnsProviders}
                    design={'providers'}
                />
            </div>   
        </div>
      </div>
  )
}

import {useState} from 'react'
import { NavMenu } from '../components/NavMenu'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import TableCustom from '../components/TableCustom';
import { columnsAdm, tableAdm } from '../initial-state/dataAdm';

export function AdmUser() {
  const [codAdm, setCodAdm] = useState('');
  const [nameAdm, setNameAdm] = useState('');
  const [surnameAdm, setSurnameAdm] = useState('');
  const [login, setLogin] = useState('');
  const [userName, setUserName] = useState('');
  const [loginConfirm, setLoginConfirm] = useState('');

  const handleCodAdm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodAdm(event.target.value);
  };

  const handleNameAdm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameAdm(event.target.value);
  };

  const handleSurnameAdm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurnameAdm(event.target.value);
  };

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleLoginConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginConfirm(event.target.value);
  };

  console.log(codAdm)
  console.log(nameAdm)
  console.log(surnameAdm)
  console.log(login)
  console.log(userName)
  console.log(loginConfirm)

  return (
    <div>
        <NavMenu />
        <div className="container-client">
            <div className="title-insert border-adm">
                <div className='row'>
                    <p>Administração de Usuários</p>
                </div>
                <div className="box border-adm">
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
                                value={codAdm}
                                onChange={handleCodAdm}
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
                                value={nameAdm}
                                onChange={handleNameAdm} 
                            />
                            <TextField 
                                label="Sobrenome" 
                                variant="standard"
                                value={surnameAdm}
                                onChange={handleSurnameAdm}
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
                            <TextField 
                                label="Login" 
                                variant="standard"
                                value={userName}
                                onChange={handleUserName}
                            />
                            <TextField 
                                label="Senha" 
                                variant="standard" 
                                value={login}
                                onChange={handleLogin} 
                            />
                            <TextField 
                                label="Confirmar Senha" 
                                variant="standard"
                                value={loginConfirm}
                                onChange={handleLoginConfirm} 
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
                    row={tableAdm}
                    column={columnsAdm}
                    design={'adm'}
                />
            </div>   
        </div>
    </div>
  )
}

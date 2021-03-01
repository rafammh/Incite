import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuCliente from '../../../components/menu-clientes';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// import Chip from '@material-ui/core/Chip';
// import AddIcon from '@material-ui/icons/Add';
import LinearProgress from '@material-ui/core/LinearProgress';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
 
}));


export default function ClientesListagem() {
  const classes = useStyles();
  const [ loading, setLoading ] = useState(true);
  const [clientes, setClientes] = useState([]);

  useEffect(() =>{
    
    async function loadClientes(){
      const response = await api.get("/api/clientes");
      console.log(response);
      setClientes(response.data)
      setLoading(false);
    }
    loadClientes();
  },[]);

  async function handleDelete(id){
    if(window.confirm("Deseja realmente excluir este usuário?")){
      var result = await api.delete('/api/clientes/'+id);
      if(result.status ===200){
        window.location.href = '/admin/clientes';
      }else{
        alert('Ocorreu um erro. Por favor, tente novamente!');
      }
    }
  }
  
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'CLIENTES DA REDE'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
            <Paper className={classes.paper}>
                <h2>Listagem de Clientes da Rede</h2>
                <MenuCliente/>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
                  {loading?(<LinearProgress style={{width:'50%', margin:'20px auto'}}  />):(
                 
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Status</TableCell>
                          <TableCell align="center">Mac</TableCell>
                          {/* <TableCell align="center">Status</TableCell> */}
                          <TableCell align="center">Primeira Visita</TableCell>
                          <TableCell align="center">Ultima Visita</TableCell>
                          <TableCell align="right">Opções</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {clientes.map((row) => (
                          <TableRow key={row._id}>
                            <TableCell component="th" scope="row">{row.status}</TableCell>
                            <TableCell align="center">{row.mac}</TableCell>
                            {/* <TableCell align="center">{row.status==="Online"?<Chip label="Online"color="primary"/>:<Chip label="Offline"color="secondary"/>}</TableCell> */}
                            <TableCell align="center">{new Date(row.firstSeen).toLocaleString('pt-br')}</TableCell>
                            <TableCell align="center">{new Date(row.lastSeen).toLocaleString('pt-br')}</TableCell>
                            <TableCell align="right">
                            <ButtonGroup aria-label="outlined primary button group">
                              <Button variant="contained" color="primary" href={'/admin/clientes/editar/'+row._id}><AutorenewIcon /> Atualizar</Button>
                              <Button variant="contained" color="secondary" onClick={() => handleDelete(row._id)}><ClearIcon /></Button>
                            </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>)}
                  </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}




// _id, mac,description,ip,ip6,ip6Local,user,firstSeen,lastSeen,manufacturer,os,recentDeviceSerial,recentDeviceName,recentDeviceMac,ssid,vlan,switchport,status,notes,sminstalled,grouppolicy8021x


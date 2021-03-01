import React, { useState, useEffect } from 'react';
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
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ReactApexChart from './graficos/grafico-tempo';
import api from '../../../services/api';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({


  root: {
    width: '100%',
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
    maxHeight: 440,
    // paddingTop: theme.spacing(4),
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [loading, setLoading] = useState(true);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {

    async function loadClientes() {
      const response = await api.get("/api/clientes.diferencadata/");
      setClientes(response.data)
      const pacesso = new Date(clientes.firstSeen).toLocaleString('pt-br');
      const uacesso = new Date(clientes.lastSeen).toLocaleString('pt-br');
      const tempocalculado = pacesso - uacesso;
      setLoading(false);
    }

    loadClientes();
  }, []);
  const columns = [
    { id: 'mac', label: 'Mac', minWidth: 170 },
    { id: 'firstSeen', label: 'Primeira Visita', minWidth: 100 },
    { id: 'lastSeen', label: 'Última Visitasssss', minWidth: 100 },
    { id: 'difdata', label: 'tempo da visita', minWidth: 100 },
  ];

  //   function createData(mac, firstSeen, lastSeen) {
  //     const pacesso = new Date(firstSeen).toLocaleString('pt-br');
  //     const uacesso = new Date(lastSeen).toLocaleString('pt-br');
  //     const tempocalculado =  new Date(lastSeen) -  new Date(firstSeen);
  //        return { mac, pacesso, uacesso, tempocalculado};
  //   }

  // const rows = [
  //   createData('India', 'IN', 1324171354, 3287263),
  // ];



  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      var result = await api.delete('/api/clientes/' + id);
      if (result.status === 200) {
        window.location.href = '/admin/clientes';
      } else {
        alert('Ocorreu um erro. Por favor, tente novamente!');
      }
    }
  }

  return (
    <div className={classes.root}>

      <MenuAdmin title={'CLIENTES DA REDE'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Tempo de Conexão dos Clientes da Rede</h2>
                <MenuCliente />
                {/* GRÁFICO */}
                <ReactApexChart />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
                      <TableContainer className={classes.container}>
                        {loading ? (<LinearProgress style={{ width: '50%', margin: '20px auto' }} />) : (
                          <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                              <TableRow>
                                {columns.map((column) => (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {clientes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                      const value = row[column.id];
                                      return (
                                        <TableCell key={column.id} align={column.align}>
                                          {/* {console.log(row )} */}
                                          {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>)}
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={clientes.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                      />
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
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import MenuAdmin from '../../../components/menu-admin';

// import ImgAdmin from '../../../assets/img/admin.png'
import IndexMapa from '../mapa/';
import Footer from '../../../components/footer-admin';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'DASHBOARD'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
       <Grid container spacing={3}>
            {/* Frequencia */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              </Paper>
            </Grid> */}
            {/* Recent Tempo */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                {/* <Tempo /> */}
                <h2>Localização dos Clientes</h2>
              </Paper>
            </Grid>
            {/* Recent SitesVisitados */}
            <Grid item xs={12} >
              <Paper className={classes.paper} style={{height: '400px', padding:"0px", position:"relative"}}>
                {/* <SitesVisitados /> */}
               
                <div style={{height: '100%', width: '50%' }}>
<IndexMapa/>
   </div>
              </Paper>
              {/* <div style={{clear:"both"}}></div> */}
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
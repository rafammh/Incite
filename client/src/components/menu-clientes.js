import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function MenuCliente() {

    return (<React.Fragment>
                <Grid style={{marginBottom:"10px"}} >
                <ButtonGroup aria-label="outlined primary button group">
                <Button color="secondary" href={'/admin/clientes/tempovisita'}>Tempo de Conexão</Button>
                <Button color="primary" href={'/admin/clientes/sitesmaisvisitados'}>Sites Acessados</Button>
                <Button color="secondary" href={'/admin/clientes/perfilusuario'}>Perfil dos Clientes</Button>
                <Button color="primary" href={'/admin/clientes/local'}>Localização dos Clientes</Button>
                </ButtonGroup>
                </Grid>
    </React.Fragment>
     ) }
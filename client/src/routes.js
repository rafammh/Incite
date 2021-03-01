import React from 'react';

// import {  BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {  BrowserRouter, Switch, Route} from 'react-router-dom';


// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtos.editar';
import ProdutoCadastrar from './pages/admin/produtos/produtos.cadastrar'

// IMPORTS clientes
import Clientes from './pages/admin/clientes';
import Graficost from './pages/admin/clientes/graficos/grafico-tempo';
import ClienteEditar from './pages/admin/clientes/clientes.editar';
import ClienteCadastrar from './pages/admin/clientes/clientes.cadastrar'
import ClienteTempoDetails from './pages/admin/clientes/tempovisita';
import ClientePerfilDetails from './pages/admin/clientes/perfilusuario';
import ClienteLocalDetails from './pages/admin/clientes/local';
import ClienteSitesmaisvisitadosDetails from './pages/admin/clientes/sitesmaisvisitados';

// IMPORTS USUARIOS
import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar'

// IMPORTS CLIENT
import Album from './pages/client/painel';
import Home from './pages/client/home';
import IndexMapa from './pages/admin/mapa/index';
import Login from './pages/admin/login';

import PrivateRoute from './services/wAuth';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                {/* Rota Cliente */}
                <Route path="/" exact component={Home} />
                <Route path="/painel" exact component={Album} />

                {/* Rota Admin */}
                <Route path="/admin/login" exact component={Login} />
                <PrivateRoute path="/admin" exact component={Dashboard} />
                <Route path="/admin/mapa" exact component={IndexMapa} />
                
                <PrivateRoute path="/admin/produtos" exact component={Produtos} />
                <PrivateRoute path="/admin/produtos/cadastrar" exact component={ProdutoCadastrar} />
                <PrivateRoute path="/admin/produtos/editar/:idProduto" exact component={ProdutoEditar} />

                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <PrivateRoute path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />

                <PrivateRoute path="/admin/clientes" exact component={Clientes} />
                <PrivateRoute path="/admin/clientes/graficost" exact component={Graficost} />
                <PrivateRoute path="/admin/clientes/cadastrar" exact component={ClienteCadastrar} />
                <PrivateRoute path="/admin/clientes/tempovisita" exact component={ClienteTempoDetails} />
                <PrivateRoute path="/admin/clientes/perfilusuario" exact component={ClientePerfilDetails} />
                <PrivateRoute path="/admin/clientes/local" exact component={ClienteLocalDetails} />
                <PrivateRoute path="/admin/clientes/sitesmaisvisitados" exact component={ClienteSitesmaisvisitadosDetails} />
                <PrivateRoute path="/admin/clientes/editar/:idClientes" exact component={ClienteEditar} />

            </Switch>
        </BrowserRouter>
    )
}
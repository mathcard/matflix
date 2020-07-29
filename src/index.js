import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastrarVideo from './pages/cadastro/Video';
import CadastrarCategoria from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const Pagina404 = () => (<div>
  <h1>Error 404</h1>
  <h2>Page Not Found</h2>
</div>);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastrarVideo} />
        <Route path="/cadastro/categoria" component={CadastrarCategoria} />
        <Route component={Pagina404} />
      </Switch>      
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

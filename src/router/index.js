import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Layout from '../components/layout'
import Loading from '../components/loading'
import Home from '../views/home';


const Detail = Layout(React.lazy(()=> import('../views/detail')))


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
          <Suspense fallback={<Loading/>}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={<Detail/>}/>
          </Suspense>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;
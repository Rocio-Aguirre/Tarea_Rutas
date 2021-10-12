import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ItemsPage from '../pages/ItemsPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/items" component={ItemsPage} />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter

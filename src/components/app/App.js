import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const SecondPage = lazy(() => import('../pages/SecondPage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/second">
                                <SecondPage/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;
import {lazy, Suspense} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const SecondPage = lazy(() => import('../pages/SecondPage'));

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route exact path="/" element={<MainPage/>} />
                            <Route exact path="/second" element={<SecondPage/>} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;
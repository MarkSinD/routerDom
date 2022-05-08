import {Link} from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    Заголовок
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><Link exact to="/">Первая страница</Link></li>
                    <li><Link to="/second">Вторая страница</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;
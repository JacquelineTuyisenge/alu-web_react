import './App.css';
import logo from './logo.jpg';
import { getFullYear, getFooterCopy } from '../../../task_1/dashboard/src/utils';
function App() {
    return(
        <div>
            <header className='App-header'>
                <img src={logo} alt='holberton logo' />
                <h1>School dashboard</h1>
            </header>
            <body className='App-body'>
                <p>Login to access the full dashboard</p>
            </body>
            <footer className='App-footer'>
                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </footer>
        </div>
    );
}

export default App
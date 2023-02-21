import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';
// eslint-disable-next-line import/order
import ErroBoundary from 'app/providers/ErrorBoundary/ui/ErroBoundary';

render(
    <BrowserRouter>
        <ErroBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErroBoundary>

    </BrowserRouter>,
    document.getElementById('root'),
);

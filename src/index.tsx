import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/app/App';
import reportWebVitals from './reportWebVitals';

import 'react-perfect-scrollbar/dist/css/styles.css';


/*ReactDOM.render(<App />,
  document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <App />
);

reportWebVitals();

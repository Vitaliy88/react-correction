import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import BackgroundColor from './sidebar/backgroundColor';
import FontPage from './sidebar/fontPage';
import Delite_P_Element from './sidebar/delite_P_element';
import ChangeSize from './sidebar/changeSize';
import FarebaseForm from './firebase/firebaseForm'
///////////
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import withAuthorization from './components/Session/withAuthorization'

ReactDOM.render(<BackgroundColor />, document.getElementById('wrap1'));
registerServiceWorker();
ReactDOM.render(<FontPage />, document.getElementById('wrap2'));
registerServiceWorker();
ReactDOM.render(<Delite_P_Element />, document.getElementById('wrap3'));
registerServiceWorker();
ReactDOM.render(<ChangeSize />, document.getElementById('wrap4'));
registerServiceWorker();
ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>, document.getElementById('root'));
registerServiceWorker();

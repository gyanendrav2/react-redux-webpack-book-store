import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { Store, persistor } from './Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
<Provider store={Store}>
<PersistGate loading={null} persistor={persistor}>
<App />
</PersistGate>
</Provider>
, document.getElementById('root'));
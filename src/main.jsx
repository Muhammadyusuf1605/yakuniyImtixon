import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { store } from './app/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(<GlobalContextProvider><Provider store={store}><App /></Provider></GlobalContextProvider>)

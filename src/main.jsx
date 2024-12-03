
import { createRoot } from 'react-dom/client';
import { TaskProvider } from './Context/Context.jsx';
import { App } from './App.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(<TaskProvider>
    <App />
</TaskProvider>)
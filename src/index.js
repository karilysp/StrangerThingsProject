import { createRoot } from 'react-dom/client'
import { App, Register, Login, Posts } from './components'

const root = createRoot(document.querySelector('#app'));

root.render (<App />);
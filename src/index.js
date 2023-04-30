import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App, Register, Login, Posts, Profile, Home, EditPost, Nav } from './components'

const root = createRoot(document.querySelector('#app'));

root.render (<BrowserRouter>
<App />
</BrowserRouter>
);
import emailjs from '@emailjs/browser'
import Home from './pages/home/Home'
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App

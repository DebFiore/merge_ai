import './App.css'
import Pages from '@/pages/Index.jsx'
import { Toaster } from '@/components/ui/toaster'
import { SchemaManager } from './components/Schema'

function App() {
  return (
    <>
      <SchemaManager pageType="homepage" />
      <Pages />
      <Toaster />
    </>
  )
}

export default App

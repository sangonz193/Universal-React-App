import "./App.css"

import { Demo } from "shared/components/demo"
import { SharedProviders } from "shared/providers"

function App() {
  return (
    <SharedProviders>
      <Demo className="m-auto" />
    </SharedProviders>
  )
}

export default App

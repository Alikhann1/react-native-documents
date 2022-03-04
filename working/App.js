import React from 'react'
import Rootscreen from './screens/rootScreen'
import { Provider} from 'react-redux'
import { store } from './screens/store/store'
function App() {
  return (
 
    < Provider store={store}>
    <Rootscreen/>
    
    </Provider>

  )
}

export default App
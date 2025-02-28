import { useState } from 'react'
import './App.css'
import {UsersList} from './components/UsersList'
import { FormUser } from './components/formUser'

function App() {

  const [dataUsers, setDataUsers] = useState([])

  const insertData = (data) => {
    setDataUsers([...dataUsers, data])
  }


  return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4 p-4">
            <FormUser insertData={insertData} />
          </div>
          <div className="col-8 p-4">
            <UsersList dataUsers={dataUsers} />
          </div>
        </div>
      </div>
  )
}

export default App;

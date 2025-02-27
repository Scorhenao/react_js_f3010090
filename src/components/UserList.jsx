import { useState } from 'react'
import './styleComponent.css'
import { FormUser } from './formUser'

export const UserList = () => {

  const [dataUses, setDataUsers] = useState([])
  const insertData = (data) => {
    console.log(data)
    setDataUsers([...data, data])
  }

  return (
    <>
      <FormUser insertData={insertData} />

      <table>
        <thead>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {dataUses && (
            <tr>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

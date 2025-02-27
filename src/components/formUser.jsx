import { useState } from 'react'

export const FormUser = ({insertData}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const save = (e) => {
        e.preventDefault()
        insertData({email, password})
    }

    return (
        <div>formUser
            <form onSubmit={save} action="">
                <label htmlFor="Email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" />
                <label htmlFor="Password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="text" />
                <input type='submit' value="save" />
            </form>
        </div>
    )
}



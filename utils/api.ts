import { NextResponse } from "next/server"

export const getUsers = async () => {
    const data  = await fetch('http://localhost:3004/users', {cache: 'no-store'})
    return data.json()
}

export const addUser = async (usuario: IUser) => {
    const newUser  = await fetch(
        'http://localhost:3004/users', 
        { 
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(usuario)
        }
    )
    return newUser.json()
}

export const deleteUser = async (usuario: IUser) => {
    const deletedUser  = await fetch(
        `http://localhost:3004/users/${usuario.id}`, 
        { 
            method: "DELETE",
        }
    )
    return deletedUser.json()
}

export const editUser = async (usuario: IUser) => {
    const editedUser  = await fetch(
        `http://localhost:3004/users/${usuario.id}`, 
        { 
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(usuario)
        }
    )
    return editedUser.json()
}
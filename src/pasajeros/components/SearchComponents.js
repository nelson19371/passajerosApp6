import React, {useState,useEffect} from 'react'

import React from 'react'

export const SearchComponents = () => {
    //setear los hooks useState
    const [users, setUsers] = useState ([])
    const [search, setSearch] = useState("")
 
    //funcion para traer los datos de la API
    const URL = 'https://api3-production.up.railway.app/api/employees'

    const showData = async() =>{
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
    }

    showData()



  return (
    <div>SearchComponents</div>
  )
}

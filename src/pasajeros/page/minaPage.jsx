import React, {useState,useEffect} from 'react'
import axios from 'axios'
import xlsx from "json-as-xlsx"


export const MinaPage = () => {
  const [users, setUsers] = useState ([])
  const [search, setSearch] = useState("")
  let jsonObject =''
  //funcion para traer los datos de la API
  const URL = 'https://api3-production.up.railway.app/api/employees'

  const showData = async() =>{
     axios.get(URL).then((res) =>{
       jsonObject = JSON.stringify(res);
      console.log(res.data)
      setUsers(res.data)
      console.log(jsonObject)
     })
  }

  const convertirEx = () =>
  {var workBook = xlsx.utils.book_new()
    var workSheet = xlsx.utils.json_to_sheet(jsonObject)
    xlsx.utils.book_append_sheet(workBook,workSheet)
    xlsx.writeFile(workBook,"convertedJsontoExcel.xlsx")}

  useEffect(()=>{
    showData()
  },[])

  // funcion de búsqueda
  const searcher = (e) =>{
    setSearch(e.target.value)
  }
  const results = !search ? users : users.filter((val)=>val.fecha.toLowerCase().includes(search.toLocaleLowerCase()))


//Funcion para convertir a Excel

  const converted =() =>{
   
     let result2 = results;
      let data = [
        {
          sheet: "PASAJEROS",
          columns: [
            { label: "RUT", value: "user" }, // Top level data
            { label: "FECHA", value: (row) => row.age  }, // Custom format
            { label: "UBICACIÓN", value: (row) => (row.more ? row.more.phone || "" : "") }, // Run functions
          ],
          
          content: [

           

           
           

            
          ],
        },
        
      ]

     

      for (let i = 0; i < result2.length; i++) {
      //  data[1].content.push({ user: result2[0].name, age: result2[0].fecha, more: { phone: result2[0].ubicacion } })
       data[0].content.push({user:result2[i].name, age: result2[i].fecha, more: { phone: result2[i].ubicacion } })
      }
      
      let settings = {
        fileName: "Listado Pasajeros Mina", // Name of the resulting spreadsheet
        extraLength: 3, // A bigger number means that columns will be wider
        writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
        writeOptions: {}, // Style options from https://docs.sheetjs.com/docs/api/write-options
        RTL: false, // Display the columns from right-to-left (the default value is false)
      }
      
      xlsx(data, settings) // Wil
     
    
  }

  //filtrar los datos
 

  return (
    <>
      <div className="divTitulo">
      <h1>Pasajeros registrados turno mina</h1>
      </div>
    
    <div className="Tabla">
    <h2 >Lista de Pasajeros</h2>
    <input value={search} onChange={searcher} type='text' data-date-format="YYYY-MM-DD" placeholder='Buscar por fecha en formato yyyy-mm-dd' className='form-control mt-3'/>
    <button type="button" className="btn btn-success mb-5 mt-5" id="boton-excel" onClick={converted}>Convertir a Excel</button>
    <table className="table table-light table-striped table-bordered">
  <thead>
    <tr className="table-dark">
      <th scope="col">id</th>
      <th scope="col">RUT</th>
      <th scope="col">FECHA</th>
      <th scope="col">UBICACIÓN</th>
    </tr>
  </thead>
  <tbody>
            {results.map((results)=>(
              <tr key={results.id}>
                  <td>{results.id}</td>
                  <td>{results.name}</td>
                  <td>{results.fecha}</td>
                  <td>{results.ubicacion}</td>
              </tr>
            ))}
        </tbody>
</table>
    </div>
    </>
  )
}

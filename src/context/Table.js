import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const TableContent = createContext()


const TableProvider = (props) => {

  axios.defaults.baseURL = "http://localhost:4000/api/v1"

  const [alert, setAlert] = useState({})
  const [invalid, setInvalid] = useState({})

    const [reservationdetails, setReservationdetails] = useState({
        date:'',
        time:'',
        dinners:'',
    })

    const reviews = ['thilak','tharun','bachu']

  return (
    <TableContent.Provider value={{
        alert, setAlert, invalid, setInvalid, reservationdetails, setReservationdetails, reviews
    }}>
      {props.children}
    </TableContent.Provider>
  )
}

const useTable = () => useContext(TableContent)

export { useTable, TableProvider }
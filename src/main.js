import "./main.scss"

import React, {useState, useEffect, useRef, useReducer} from 'react'
import ReactDOM from 'react-dom'



const App = () => {

    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const allItems = useRef(0)
    const allPages = useRef(0)

    useEffect( () => {
        getItems()
    }, [itemsPerPage, currentPage])

    const getItems = async () => {
        setLoading(true);

        const response = await fetch(`https://reqres.in/api/users?page=${currentPage}&per-page=${itemsPerPage}`)

        const responseJson = await  response.json()

        console.log(responseJson);
    }

    return (
        <>

        </>
    )
}




ReactDOM.render(<App />, document.getElementById('root') )

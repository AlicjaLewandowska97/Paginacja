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

    const getItems =  () => {
        setLoading(true);

          fetch(`https://reqres.in/api/users?page=${currentPage}&per-page=${itemsPerPage}`)
          .then( response => response.json() )
          .then( resJson => {
              allItems.current = resJson.total;
              allPages.current = allItems.current / itemsPerPage;

              setLoading(false);
              setList(resJson.data)
          })

        
    }

    return (
        <>
             <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-lg-8">
                         <h1 className="my-5">Lista użytkowników</h1>
                         {list.map((item,index) => (
                             <div key={index} className="card mb-5">
                                 <div className="card-body">
                                    <h2>{item.first_name}, {item.last_name}</h2>

                                    </div>
                                </div>
                            ))}
                     </div>
                 </div>
             </div>
        </>
    )
}




ReactDOM.render(<App />, document.getElementById('root') )

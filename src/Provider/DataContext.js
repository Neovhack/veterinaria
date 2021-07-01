import React, { createContext, useContext, useState, useEffect } from 'react'
import {getFireStore} from "../FireBase/api"

const DataCreateContext = createContext();

export function UseData() {
    return useContext(DataCreateContext);
}

export function DataContext({ children }) {
    const [data, setData] = useState([]);

     //Promesa para traer datos de apis

     
     const [loading, setLoading] = useState(false)
 
     useEffect(() => {
         setLoading(true)
         const db= getFireStore()
         const itemCollection = db.collection("productos")  
         itemCollection.get().then(                     
             (querySnapshot)=>{                        
                 if(querySnapshot.size === 0){          
                     console.log("no hay resultados");
                 }
                 setData(querySnapshot.docs.map(doc => doc.data()))   
             }
         ).catch((error) => {console.log("Error searching items", error)}).finally(() => {setLoading(false)})  
     }, [])
 
   
    
    return (
      <DataCreateContext.Provider value={{data}}>
          {children}
        </DataCreateContext.Provider>
    )
}


export default DataContext
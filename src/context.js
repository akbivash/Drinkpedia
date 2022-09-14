import { useContext, useEffect, useState } from "react"
import React from "react"


const AppContext = React.createContext()
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

   const fetchDrinks = async () => {
    setLoading(true)
    try{
const response = await fetch(`${url}${searchTerm}`)
const data = await response.json()
const {drinks} = data
if(drinks){
const newDrinks = drinks.map((item) => {
    const {
        idDrink, 
        strDrink,
         strDrinkThumb,
          strAlcoholic,
          strGlass
        } = item
    return {
        id: idDrink, 
        name: strDrink,
         image: strDrinkThumb, 
         info: strAlcoholic,
    glass: strGlass
}
})
setCocktails(newDrinks)

}else{
    setCocktails([])
  
}
setLoading(false)
    } catch(err){
        console.log(err)
        setLoading(false)
    }
    }
   

 useEffect(()=> {
    fetchDrinks()

 }, [searchTerm])

    return (
        <AppContext.Provider
            value={{
                loading,
                 cocktails,
                  setSearchTerm,
                  searchTerm
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
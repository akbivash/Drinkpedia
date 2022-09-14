import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
const searchValue = React.useRef('')


function searchCocktail(){
  setSearchTerm(searchValue.current.value)
}
function handleSubmit(e){
  e.preventDefault()
}
  return (
    <form className="form_control" onSubmit={handleSubmit}>
      <label htmlFor="name">search your cocktails</label>
      <input type="text"
      name='name'
      id='name'
      ref={searchValue}
      onChange={searchCocktail}
       />
    </form>
  )
}

export default SearchForm
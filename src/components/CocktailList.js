import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import styled from 'styled-components'


export const Flex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 3rem;
`
 export const Heading = styled.div`
text-align:center;
`

const CocktailList = () => {
    const{loading, cocktails, } = useGlobalContext()
    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
        return  <Heading><h2>No result matches to your search criteria</h2></Heading>
    } 
    
  return (
   <div className="section">
   <Heading>
   <h2 className="section-title">Cocktails</h2>
   </Heading>
  
     <Flex>
     {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />
      })}
     </Flex>
  
   </div>
  )
}

export default CocktailList
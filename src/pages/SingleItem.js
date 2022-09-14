import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Flex, Heading } from '../components/CocktailList'
import styled from 'styled-components'
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`


const Image = styled.div`
max-width: 400px;
img{
    width: 100%;
border-radius: 10px;
}

`
const Wrapper = styled.div`
display: flex;
justify-content: center;
padding: 1rem;
gap: 1rem;
align-items: center;
@media (max-width: 720px) {
    flex-direction: column;
   
  }
`

export default function SingleCocktail({setIsMenuOpen, isMenuOpen}) {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `${url}${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section cocktail-section'>
     
       <li className='backBtn'>
        <Link to='/' onClick={() => setIsMenuOpen(!isMenuOpen)} ><p>Back Home</p></Link>
       </li>
        <h2 style={{textAlign:'center', }}>{name}</h2>
        <Wrapper>
       
     <div>
     <Image>   <img src={image} alt={name}></img></Image>
     </div>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name </span> {name}
            </p>
            <p>
              <span className='drink-data'>category </span> {category}
            </p>
            <p>
              <span className='drink-data'>info </span> {info}
            </p>
            <p>
              <span className='drink-data'>glass </span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons </span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
      
        </Wrapper>
      </section>
    )
  }
}
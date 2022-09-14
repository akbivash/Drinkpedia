import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

 export const Image = styled.div`
.img-container{
    width: 300px;
   

}
img{
    width: 100%;
    border-radius: 10px;
}
.btn-primary{
  background: black;
}
`
const Button = styled.div`
background: green;
padding: 5px;
width: 100px;
border-radius: 7px;
text-align: center;
color: white;
`

const Cocktail = ({image, name, glass, id, info, setIsMenuOpen, isMenuOpen}) => {
  // console.log(image)
  return (
  
     <div className="cocktail">
       <Image>
       <div className="img-container">
            <img src={image} alt={id} />
        </div>
       </Image>
        <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
         
          <Link to={`/cocktail/${id}`}  >
         details
            </Link>
         
        
        </div>
    </div>

  )
}

export default Cocktail
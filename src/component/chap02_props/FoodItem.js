import React from 'react'

                    // props 디스트럭쳐링 
const FoodItem = ({foodId, foodName : fName, price}) => {

    // console.log('props:' , props);
  return (
    <li id={foodId}> {fName}({price}원)</li>
  )
}

export default FoodItem
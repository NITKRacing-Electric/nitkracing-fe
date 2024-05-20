import React, { useEffect } from 'react'
import { useStateContext } from '../context'
import { arrayBuffer, div } from 'three/examples/jsm/nodes/Nodes.js'
import { urlFor } from './sponsors'
import { useState } from 'react'
import i7 from '../images/hero/DSC03422.JPG'
import i8 from '../images/hero/DSC03426.JPG'
import i9 from '../images/hero/DSC03427.JPG'

const Random = () => {
  const {testData , isLoading} = useStateContext()
  const array = [i7 , i8 , i9]
  let newArray = []
  
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  
  useEffect(()=>{
    newArray  = shuffleArray(array)
    console.log('new array', newArray)
  },[])
  
  console.log('old array' , array)
  return (
    <>
    <div>Random</div>
    <div>
      {
        newArray?.map((image)=>(

          <div>
            <span>{new Date()}</span>
            <img src={image} alt="image" />
          </div>
        ))
      }
    </div>
    <div>
      {isLoading ? (<div>...loading</div>):(
        <div>
          {testData.map((item , key)=>(
        <div>
          <span>{item.memberName}</span>
          {/* <img src={urlFor(item.image)} alt="image" /> */}
          
        </div>
      ))}
        </div>
      ) }
      
      
    </div>
    
    </>
  )
}

export default Random

// {testData?.map((item)=>(
//   <div>
//     {item?.memberName}
//   </div>
// ))}
// {isLoading && (<span>...Loading</span>)}

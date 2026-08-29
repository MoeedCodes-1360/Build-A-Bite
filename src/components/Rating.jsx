import React from 'react'

const Rating = ({value,onChange}) => {
  return (
    <div>
      {[1,2,3,4,5].map((star)=>{
       return  <button 
        key={star}
        type="button"
        onClick={()=>{onChange(star)}}
        className={`text-3xl ${star<=value ? "text-yellow-400": "text-gray-500"}`}
        
        >★
</button>

      })}
    </div>
  )
}

export default Rating

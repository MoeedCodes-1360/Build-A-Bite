import {useEffect,useRef,useState} from 'react'

const SlideIn = ({children}) => {
    const [visible,setVisible]=useState(null)
    const ref=useRef(null)
    useEffect(()=>{
        const observer= new IntersectionObserver(
            ([entry])=>{
                setVisible(entry.isIntersecting)
            },

{
    threshold:0.2
}

        )
        if(ref.current){
            observer.observe(ref.current)
        }
        return ()=>{observer.disconnect()}
    },[])
    
      return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20"
      }`}
    >
      {children}
    </div>

  )
}

export default SlideIn

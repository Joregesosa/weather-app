import  {  useState } from 'react'
 
export function useChanges() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);
  const [loading, setLoading] = useState(true)
 
 
  

  return {
    isNavOpen,
    setIsNavOpen,
    isCelcius,
    setIsCelcius,
    loading,
    setLoading
  }
}



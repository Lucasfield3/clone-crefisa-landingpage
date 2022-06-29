import { createContext, ReactNode, useState, useEffect } from 'react'

type MatchContextData = {
    match:boolean;
}

type MatchProviderProps = {
     children: ReactNode
}

export const MatchContext = createContext({} as MatchContextData)

export const MatchProvider = ({children}: MatchProviderProps) =>{

    const [match, setMatch] = useState<boolean>(undefined)

    const handleMatch = ()=>{
        if(window){
            const checkMedia = window.matchMedia('(max-width:767px)')
            if(!match){
                if(checkMedia.matches){
                    setMatch(checkMedia.matches)
                }else{
                    setMatch(checkMedia.matches)
                }
            }else{
                checkMedia.addEventListener('change', ()=>{
                    if(checkMedia.matches){
                        setMatch(checkMedia.matches)
                    }else{
                        setMatch(checkMedia.matches)
                    }
                })
            }
        }
    }

    useEffect(()=>{
        handleMatch()
    },[match])

     return(
         <MatchContext.Provider value={{match}}>
             {children}
         </MatchContext.Provider>
     )

}
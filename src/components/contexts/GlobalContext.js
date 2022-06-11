import React, {createContext, useState} from 'react'


export const MyGlobalContext = createContext();
export default function GlobalContext({children, props}) {

    const[ globalState, setGlobalState] = useState({
        projectOwner:' ',
        id:' ',
        info:' ',
        team: ' ',
        projectId:' ',
        darkTheme: false,
    });
   
    return (
    <MyGlobalContext.Provider value={[globalState,setGlobalState]}>
        {children}
    </MyGlobalContext.Provider>
  )
}

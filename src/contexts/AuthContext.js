import React, { useContext, useEffect, useState } from 'react'
import auth from "../Firebase"

const AuthContext = React.createContext({children})

export function useAuth(){
    return useContext(AuthContext)
}



export  function AuthProvider() {

    const [currentUser,setCurrentUser] = useState()

    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    useEffect(()=>{
        const unsubscribe =auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe
        
    },[])

    const value = {
        currentUser
    }
    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

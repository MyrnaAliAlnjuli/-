import React ,{ createContext ,useState} from "react";
export const AuthContext =createContext();
export const AuthProvider = ({children})=>{
    const [isLogedIn, setLogedIn] = useState(false);
    return(<>
    <AuthContext.Provider value={{isLogedIn,setLogedIn}}>
        {children}
    </AuthContext.Provider>
    
    </>)
}

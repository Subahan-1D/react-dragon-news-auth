import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app) 
 export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
        .then()
        .catch()
    }

    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


import { createContext } from "react";
import { useState } from "react";
export const LangContext = createContext()

export const LangProvider =({children})=> {

const [lang , setLang] = useState(localStorage.getItem('lang') ||'en')
localStorage.setItem('lang', lang)
    return (
        <LangContext.Provider value={{lang , setLang}}>
{children}
        </LangContext.Provider>
    )

}
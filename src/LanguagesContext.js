import React, { createContext } from "react";
import useTranslation from "./useTranslation";
export const LanguageContext = createContext(null);


export const LanguageProvider = ({ children }) => {
    const { t, language, updateLanguage } = useTranslation();
    
    return (
        <LanguageContext.Provider value={{ t, language, updateLanguage }}>
        {children}
        </LanguageContext.Provider>
    )
};
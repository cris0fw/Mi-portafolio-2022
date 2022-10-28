/* eslint-disable default-case */
import React, { createContext, useState } from "react";
import MensajeEspañol from '../lang/es.json'
import MensajeIngles from '../lang/en.json'
import { IntlProvider } from "react-intl";

const ContextoLenguaje = createContext()

const ProviderLenguaje = ({children}) => {
let localePorDefecto;
let mensajesPorDefecto;
let lang = localStorage.getItem("lang")

if(lang){
    localePorDefecto = lang

    if(lang === "es"){
        mensajesPorDefecto = MensajeEspañol
    }
    else if(lang === "en"){
        mensajesPorDefecto = MensajeIngles
    }
    else{
        localePorDefecto = "es"
        mensajesPorDefecto = MensajeEspañol
    }
}

const [mensaje, setMensaje] = useState(mensajesPorDefecto)
const [locale, setLocale] = useState(localePorDefecto)

const establecerMensaje = (lenguaje) => {
    switch(lenguaje){
        case "es": {
            setMensaje(MensajeEspañol)
            setLocale("es")
            localStorage.setItem("lang", "es")
        break;
        }
        case "en": {
            setMensaje(MensajeIngles)
            setLocale("en")
            localStorage.setItem("lang", "en")
        break;    
        }
        default: {
            setMensaje(MensajeEspañol)
            setLocale("es")
            localStorage.setItem("lang", "es")
        }
    }
}

const data = {establecerMensaje}

    return (
       <IntlProvider locale={locale} messages={mensaje}> <ContextoLenguaje.Provider value={data}>{children}</ContextoLenguaje.Provider> </IntlProvider>
    )
}

export {ContextoLenguaje, ProviderLenguaje}
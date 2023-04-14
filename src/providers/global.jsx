import { createContext } from "react";
import { BsScissors } from 'react-icons/bs'
import { GiBeard } from 'react-icons/gi'
import { SlMustache } from 'react-icons/sl'

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Catalogo de sites
    const catalogo = [
        {nome: "Cabelo", descri: "Descrição vem aqui", icon: <BsScissors/>},
        {nome: "Barba", descri: "Descrição vem aqui", icon: <GiBeard/>},
        {nome: "Bigode", descri: "Descrição vem aqui", icon: <SlMustache/>}
    ];

    //Contato
    const userData = {
        telefone:"41 3333-3333",
        celular:"+5541999999999",
        twitter:"http://twitter.com.br",
        facebook:"http://facebook.com.br",
        insta:"http://instagram.com.br",
        cidade:"Cidade",
        bairro:"Bairro",
        rua:"Rua - nº xxxx"

    }

    const cellText= userData.celular.slice(0,3)+" "+userData.celular.slice(3,5)+" "+userData.celular.slice(5,10)+" "+userData.celular.slice(10,14);

    return (
        <GlobalContext.Provider
         value={{ catalogo, userData, cellText }}>
          {children}
        </GlobalContext.Provider>
       )

}
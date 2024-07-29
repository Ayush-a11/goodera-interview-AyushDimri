import { Children, createContext, useContext, useState } from "react";

const context=createContext();


export const useDataContext =()=>{
	return useContext(context);

}


export default function Use_context({children}){

	const [data,setData] =useState({});
	const [open,setIsOpen] = useState(false);

	return <context.Provider value={{data,setData,open,setIsOpen}}>
		{children}</context.Provider>
}
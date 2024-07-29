import { useEffect, useState } from "react";


export default function useFetchHook(url,deps){
	const [data,setData] =useState(null);
	useEffect(()=>{
		
		(async function fetchData(){
		try{
		const resp = await fetch(url);
		const jsonData= await resp.json();

		setData(jsonData);	

		}
		catch(err){
			throw new Error("Error at Custom Hook",err);
		}
		})();

	
	},deps);

	return data;
}
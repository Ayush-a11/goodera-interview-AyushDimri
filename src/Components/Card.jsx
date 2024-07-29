import React from 'react'
import useFetchHook from '../hooks/useFetchHook'
import Modal from './Modal';
import { useDataContext } from '../Context/Use-context';

function Card({pokemonUrl,name}) {

	const pokemonData= useFetchHook(pokemonUrl,[]);

	const {data,setData,setIsOpen}= useDataContext();

	// console.log('dataContext',context);
	const handleClick=()=>{
		setData(pokemonData);
		setIsOpen(true);
		console.log('handleClick')
	}

	// console.log(pokemonData)
  return (
	<div className="card bg-slate-300 border-2 border-gray-50 hover:scale-125 size-32"
		onClick={handleClick}
	>
		<h2>{name}</h2>
		
	</div>
  )
}

export default Card
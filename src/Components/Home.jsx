import React, { useState } from 'react'
import useFetchHook from '../hooks/useFetchHook'
import Card from './Card';
import Modal from './Modal';
import Pagination from './Pagination';

function Home() {

	const [page,setPage] =useState(1);
	 

	const resp= useFetchHook(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page*12}`,[page]);

	//fetch data from api...
  return (
    <>
	// 3*4 grid
	<h3>Pokemoon</h3>
	
	<div className="grid grid-cols-3 gap-4">

		{resp && resp.results && resp.results.map((item)=>(
			<Card key={item.name} pokemonUrl={item.url} name={item.name}/>
		))}	

	<Modal/>		

	{resp?.count &&	
	<Pagination totalCount={resp?.count} page={page} setPage={setPage}/>
	}
	</div>
	</>
	
	// Pagination
  )
}

export default Home
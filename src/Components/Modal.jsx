import React, { useState } from 'react'
import { useDataContext } from '../Context/Use-context';

function Modal() {

	// const [isOpen, setIsOpen] =useState(true);
	const {open, setIsOpen,data} = useDataContext();

	const toggleModal =()=>{
		setIsOpen((prev)=>!prev);
	}

	console.log(data);
	return open?
	(

	<div className="flex justify-center items-center absolute bg-white  opacity-50 inset-0 z-10"
		onClick={toggleModal}
	>
		<div className='flex flex-col justify-center items-center text-black bg-white  absolute border-2 border-black w-1/2 h-2/3 z-20'>
			<span>Name:-{data.name}</span>
			<span>Weight:-{data.weight}</span>
			<span>height:-{data.height}</span>
			<span>Species:-
				{data.species.name}
				
			</span>
			<span>Types:-{ data.types && data.types.map((item,i)=>(
					<>{i==0?'':','}{item.type.name}</>
				))}</span>
		</div>

	</div>
  ):null
}

export default Modal
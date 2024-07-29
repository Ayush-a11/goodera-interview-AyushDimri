import React from 'react'

function Pagination({totalCount,page,setPage}) {

	const totalPage=Math.round(parseInt(totalCount)/12);

	console.log(totalPage);
	const arr= new Array(totalPage).fill(null);


	const handlePrev=()=>{
		setPage((prev)=>prev-1);
	}
	
	const handleNext=()=>{
		setPage((prev)=>prev+1);
	}

	const handlePageChange=(id)=>{
		setPage(id)
		console.log('value',page)
	}

	return (


	<div className='flex'>

		{page>0&&
		<button onClick={handlePrev}>Prev</button>
		}//
		
		{arr.map((item, i)=>(
			<span className={`cursor-pointer border-2 size-4 ${i==page?'bg-blue-600':""}`} key={i} onClick={(e)=>{e.preventDefault()
				handlePageChange(i)}}>{i}</span>
		))};



        {page <totalPage &&
		<button onClick={handleNext}>Next</button>
		}	
	</div>
  )
}

export default Pagination
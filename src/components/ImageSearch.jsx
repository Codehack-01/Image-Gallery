import React, {useState} from 'react'

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text)
    }
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto flex justify-center items-center'>
      <form id ='search' onSubmit={onSubmit} className="w-[90%] md:w-full max-w-sm ">
        <div className="flex items-center  border px-4 border-gray-500 py-2 rounded-[30px]">
          <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search cars, nature..." />
          <button className="flex-shrink-0 bg-black hover:bg-black text-sm text-white py-1 px-2 rounded" type="submit">
            Search
          </button>
        </div>
      </form>
	</div>
  )
}

export default ImageSearch;
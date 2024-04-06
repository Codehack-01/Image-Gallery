import React from 'react';
import {download, like} from '../assets';

const ImageCard = ({image}) => {
  const tags = image.tags.split(','); 
  return (
    <div className='p-1 '>
      <div className='relative overflow-hidden group '>
        <img src={image.webformatURL} alt="card-img" className='w-full' />
        <div className='absolute h-full w-full bg-black/30 flex -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
          <div className='px-6 py-4 w-full h-full flex flex-col justify-between'>
            {<div className='flex justify-between w-full '>
              <div className='font-bold text-gray-300 text-sm md:text-base mb-2'>Photo by @{image.user}</div>
              <div className='text-gray-300 text-sm md:text-base'>Views: {image.views}</div>
            </div>}
            <div className='flex flex-row justify-between self-end w-full items-center text-gray-300'>
              <div><img src={download} className='w-[20px] h-[20px] md:w-[22px] md:h-[22px]' alt="" />{}</div>
              <div><img src={like} className='w-[20px] h-[20px] md:w-[22px] md:h-[22px]'  alt="" /></div>
            </div>
            
            {/* <ul>
              <li>
                <strong>Views: </strong>{image.views}
              </li>
              <li>
                <strong>Downloads: </strong>{image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>{image.likes}
              </li>
            </ul> */}
          </div>
          {/* <div className="px-6 py-4">
            {tags.map((tag, index)=> {
              return  <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>
              })}
          </div> */}
        </div>
      </div>
      
      {/* <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>{image.views}
          </li>
          <li>
            <strong>Downloads: </strong>{image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>{image.likes}
          </li>
        </ul>

      </div> */}
      {/* <div className="px-6 py-4">
        
        {tags.map((tag, index)=> {
          return  <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}</span>
        })}

      </div> */}
    </div>
  )
}

export default ImageCard;
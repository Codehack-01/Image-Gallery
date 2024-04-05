import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState(' ');

  /* useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term]); */
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=42083162-428870de7d81f7cee9c10591c&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto ">
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Images Found</h1>}

      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : <div className="columns-1 gap-0 lg:gap-0 sm:columns-2 lg:columns-3  [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  )
}

export default App

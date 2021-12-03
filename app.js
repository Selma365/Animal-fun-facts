import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title="";
const showBackground=true;
const background=(
  <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
  />
  )

const images=[];
for(const animal in animals){
  images.push(
    <img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    arialLabel={animal}
    role='button'
    onClick={displayFact}

    />
  );
}
function displayFact(e){
  const selected_animal=e.target.alt;
  const info=animals[selected_animal];
  random_index= Math.floor(Math.random()* info.facts.length);
  const funfact= info.facts[random_index];
  document.getElemenetById('fact').innerHTML=funfact;
}

const animalFacts=(
<div>
<h1>{(title=="") ? "Click an animal for a fun fact" : title} </h1>
{showBackground && background}
  <p id='fact'></p>
  <div className='animals'>
  {images}
  </div>
</div>
);

ReactDOM.render(animalFacts,document.getElementById('root'));



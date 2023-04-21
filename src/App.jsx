import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={viteLogo} className='logo' alt='Vite logo' />
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          Đếm cừu, đếm cừu đến sáng mai. <br /> Đấm Vy, đấm Vy đến sáng mai
          <br />
          {count}
        </button>
      </div>
      <img
        src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-1/337701901_3412911172299573_6337026887903548466_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=VUGamRN-zkYAX94_0sV&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfB8NRLYKImodgJ5vvLTU-mt3bAxFoEh6JH13eIiY09_4g&oe=6447FCCD'
        alt=''
        className='avatar-vy'
      />
      <h1>Avatar của con Vy</h1>
    </>
  );
}

export default App;

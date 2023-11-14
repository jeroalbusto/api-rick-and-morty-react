import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList'
import Loading from './components/Loading'



const App = () => {

  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de la aplicación
    setTimeout(() => {
      setAppIsLoading(false);
    }, 1000); // 2 segundos en milisegundos
  }, []);


  return <div className='bg-dark text-white'>
    <h1 className="text-center display-1 py-4">Rick and Morty</h1>
    {appIsLoading ? <Loading /> : <CharacterList />}
  </div>;
};

export default App;

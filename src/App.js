import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Header,
  MainContainer,
  CreateContainer
} from './components';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col'>
        <Header />
        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/create' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
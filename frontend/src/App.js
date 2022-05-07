import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Shop from './components/Shop';
import PetGrooming from './components/PetGrooming';
import PetTraining from './components/PetTraining';
import PetTaxi from './components/PetTaxi';
import DogWalk from './components/DogWalk';
import MedicalNeed from './components/MedicalNeed';
import PetSitting from './components/PetSitting';
import ProductScreen from './components/ProductScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:slug" element={<ProductScreen />}></Route>
          <Route path="/pet-grooming" element={<PetGrooming />}></Route>
          <Route path="/pet-sitting" element={<PetSitting />}></Route>
          <Route path="/pet-training" element={<PetTraining />}></Route>
          <Route path="/dog-walking" element={<DogWalk />}></Route>
          <Route path="/medical-need" element={<MedicalNeed />}></Route>
          <Route path="/pet-taxi" element={<PetTaxi />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/lregistration" element={<Registration />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

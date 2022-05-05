import Home from './components/Home';
import Shop from './components/Shop';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

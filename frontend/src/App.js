import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PaymentSuccess from "./Components/PaymentSuccess"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

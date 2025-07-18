import './App.css';
import Navbar from './components/navbar/navbar';
import HeaderPage from './pages/header';
import FoodPage from './pages/food';
import DrinkPage from './pages/drink';
import DessertPage from './pages/dessert';
import ContactPage from './pages/contact';

const App = () => {
  return (
    <>
      <Navbar />
      <HeaderPage />
      <FoodPage />
      <DrinkPage />
      <DessertPage />
      <ContactPage />
    </>
  )
}

export default App

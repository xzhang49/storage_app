import './App.css';
import ListProductComponent from './components/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListProductComponent />
      </div>
      <FooterComponent />
    </div>
    
  );
}

export default App;

import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
    "Camera",
    "Shoes",
    "Handbag",
    "Smartphone",
    "Sweater",
    "Watch",
    "Headphones",
    "Book",
    "Ring",
]

function ShoppingCart() {
    const [entries, setEntries] = useState([]);

    function makeOptions(arr) {
      const optionItems = arr.map(
        (item, i) => <option key={i} value={item}>{item}</option>
      );
      return optionItems;
    }

    function makeListItems(arr) {
      const optionItems = arr.map(
        (item, i) => <li key={i} id={item}>{item}</li>
      );
      return optionItems;
    }

    function clearEntries() {
      setEntries([]);
    }

    function countEntries() {
      return entries.length;
    }

    function addEntry() {
        let selectedProduct = document.getElementById("selectProduct").value;
        if (!entries.includes(selectedProduct)) {
            setEntries([...entries, selectedProduct]);
        }
    }

    function handleFormSubmit(e) {
      e.preventDefault();
    }

    return  (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="selectProduct">Buy</label>
          <select name="selectProduct" id="selectProduct">
            {makeOptions(products)}
          </select>
          <input type="submit" value="Add Product" onClick={() => addEntry()}/>
          <button onClick={() => clearEntries()}>Empty Cart</button>
      </form>
      <p>{(countEntries() > 0) ? "There are " + countEntries() + " item(s) in your shopping cart" : "Add some items"}</p>
      <div className="Cart Items">
        <ul>
            {makeListItems(entries)}
        </ul>
      </div>
    </>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DJB Shopping Cart</h1>
      </header>
      <main className="App-main">
        {ShoppingCart()}
      </main>
    </div>
  );
}

export default App;

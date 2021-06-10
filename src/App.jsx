import React, { useContext } from 'react';
import { AddItemForm } from './components/AddItemForm';
import { ItemsList } from './components/ItemsList';
import { Loader } from './components/Loader';
import { ApiContext } from './context/apiContext';

function App() {
  const TEST_APP_API_URL_MINI = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const TEST_APP_API_URL_MAX = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const {loading, items, add_form, filterVal, fetchData, showAddForm, showItemCard} = useContext(ApiContext);
  console.log(useContext(ApiContext))
  return (
    <div className="container pt-4 maincont">
      <div className='d-grid gap-3 col-6 mx-auto p-4'>
        <button onClick={() => fetchData(TEST_APP_API_URL_MINI)} type="button" className="btn btn-dark btnHover">Load Mini (32)</button>
        <button onClick={() => fetchData(TEST_APP_API_URL_MAX)} type="button" className="btn btn-dark btnHover">Load Max (1000)</button>
        <button onClick={() => showAddForm()} type="button" className="btn btn-dark btnHover">Add New Item</button>
        {add_form ? <AddItemForm /> : null}
      </div>
        {loading ? <Loader /> : <ItemsList items={items} filterVal={filterVal} showItemCard={showItemCard} />}
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
import { ApiContext } from '../context/apiContext';

export const AddItemForm = () => {
    const {showAddForm, addItem} = useContext(ApiContext);

    const newItem = {
        
    }
    return (<div className='cardContainer'>
        <div className="d-flex justify-content-end">
            <button onClick={() => showAddForm()} type="button" className="btn-close" aria-label="Close"></button>
        </div>

        <form action="">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Firstname</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Lastname:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Lastname"/>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"/>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone number:</label>
                <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="(123)123-1234"/>
            </div>

            {/* adress[] */}
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Street Address:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Street Address"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">City:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your City"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">State:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your State"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">ZIP:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your ZIP"/>
            </div>
            {/*  */}

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>

        <div className="d-flex justify-content-center">
            <button onClick={() => addItem()} type="button" className="btn btn-dark btnHover">Add New Item</button>
        </div>
        </div>
    )
}
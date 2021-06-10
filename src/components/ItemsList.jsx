import React, { useContext } from 'react';
import { apiContext } from '../context/apiContext';
import { ItemCard } from './ItemCard';

export const ItemsList = ({items, filterVal, showItemCard}) => {
    
    const listItems = items.map(item => 
    (
    <tr onClick={() => showItemCard()} className='item'>
        <th scope="row">{item.id}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
    </tr>))
    
    return(
        <table className="table">
            <thead>
                <tr>
                <th>
                    <button onClick={filterVal.id} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ID
                    </button>
                </th>
                <th>
                    <button onClick={filterVal.firstName} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        FirstName
                    </button>
                </th>
                <th>
                    <button onClick={filterVal.lastName} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        LastName
                    </button>
                </th>
                <th>
                    <button onClick={filterVal.email} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Email
                    </button>
                </th>
                <th>
                    <button onClick={filterVal.phone} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Phone
                    </button>
                </th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    )
}
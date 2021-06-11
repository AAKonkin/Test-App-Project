import React, { useContext } from 'react';
import { ApiContext } from '../context/apiContext';
import { ItemCard } from './ItemCard';

export const ItemsList = () => {
    const {items, filterVal, showItemCard, item_card} = useContext(ApiContext);

    const listItems = items.map(item => 
    (
    <div onClick={() => showItemCard()} className="d-tr item">
        <div className="d-td">{item.id}</div>
        <div className="d-td">{item.firstName}</div>
        <div className="d-td">{item.lastName}</div>
        <div className="d-td">{item.email}</div>
        <div className="d-td">{item.phone}</div>
    </div>
    // <div className="d-tr">
    //         {item_card ? <ItemCard firstName={item.firstName} lastName={item.lastName} description={item.description} address={item.address} /> : null}
    // </div>
    // <div className='item'>
    //     <div onClick={() => showItemCard()} className="d-tr">
    //         <div className="d-td">{item.id}</div>
    //         <div className="d-td">{item.firstName}</div>
    //         <div className="d-td">{item.lastName}</div>
    //         <div className="d-td">{item.email}</div>
    //         <div className="d-td">{item.phone}</div>
    //     </div>
    //     {/* <div className="d-tr">
    //         {item_card ? <ItemCard firstName={item.firstName} lastName={item.lastName} description={item.description} address={item.address} /> : null}
    //     </div> */}
    // </div>
    
            // {/* <div onClick={() => showItemCard()} className="d-tr">
            //         <div className="d-td" style={{width:'100px'}}>{item.id}</div>
            //         <div className="d-td">{item.firstName}</div>
            //         <div className="d-td">{item.lastName}</div>
            //         <div className="d-td">{item.email}</div>
            //         <div className="d-td">{item.phone}</div>
            // </div> */}
            //         {/* <div className="d-td">
            //         {/* <tr onClick={() => showItemCard()} className='item'> */}
            //             {/* <tr onClick={() => showItemCard()} className='item'>
            //             <th scope="row">{item.id}</th>
            //             <th>{item.firstName}</th>
            //             <th>{item.lastName}</th>
            //             <th>{item.email}</th>
            //             <th>{item.phone}</th>
            //             </tr>*/}
            //             {/* <div className="d-table">
            //                 <div onClick={() => showItemCard()} className="d-tr">
            //                     <div className="d-td">{item.id}</div>
            //                     <div className="d-td">{item.firstName}</div>
            //                     <div className="d-td">{item.lastName}</div>
            //                     <div className="d-td">{item.email}</div>
            //                     <div className="d-td">{item.phone}</div>
            //                 </div>
            //             </div>
            //         </div> */}
    ))
    
    return(<>
        <div className="d-table">
            <div className="d-tr">
                <div className="d-td">
                    <button onClick={filterVal.id} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ID
                    </button>
                </div>
                <div className="d-td">
                    <button onClick={filterVal.firstName} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        FirstName
                    </button>
                </div>
                <div className="d-td">
                    <button onClick={filterVal.lastName} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        LastName
                    </button>
                </div>
                <div className="d-td">
                    <button onClick={filterVal.email} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Email
                    </button>
                </div>
                <div className="d-td">
                    <button onClick={filterVal.phone} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Phone
                    </button>
                </div>
            </div>
            {listItems}
        </div>
        </>
        // <table className="table">
        //     <thead>
        //         <tr>
        //         <th>
        //             <button onClick={filterVal.id} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 ID
        //             </button>
        //         </th>
        //         <th>
        //             <button onClick={filterVal.firstName} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 FirstName
        //             </button>
        //         </th>
        //         <th>
        //             <button onClick={filterVal.lastName} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 LastName
        //             </button>
        //         </th>
        //         <th>
        //             <button onClick={filterVal.email} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Email
        //             </button>
        //         </th>
        //         <th>
        //             <button onClick={filterVal.phone} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Phone
        //             </button>
        //         </th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {listItems}
        //     </tbody>
        // </table>
    )
}
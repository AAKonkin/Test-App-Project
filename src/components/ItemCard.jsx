import React from 'react';

export const ItemCard = ({firstName, lastName, description, address}) => {
    return(
        <div className="cardItem">
            <div className="form-floating">
                <h5>Selected User: {firstName}&nbsp;{lastName}</h5>
                <h6>Street Address: {address.streetAddress}</h6>
                <h6>City: {address.city}</h6>
                <h6>State: {address.state}</h6>
                <h6>ZIP: {address.zip}</h6>
            </div>
            <div>
                <label for="floatingTextarea">Description:</label>
                <textarea className="form-control" style={{height: '100px'}} placeholder="Leave a comment here" value={description}></textarea>
            </div>
        </div>
    )
}
import React from 'react';

export const ItemCard = ({firstName, lastName, description, adress}) => {
    console.log({firstName, lastName, description, adress});
    return(
        <div className="cardItem">
            <h1>Selected User: {firstName}&nbsp;{lastName}</h1>
            <div class="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" value={description}></textarea>
                <label for="floatingTextarea">Description:</label>
            </div>
        </div>
    )
}
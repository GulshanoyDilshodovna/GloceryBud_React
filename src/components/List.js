import React from 'react'

function List({items, removeItem, editItem}) {
    return (
        <div>
            {
                items.map(item=>{
                    const {id, title} = item
                    return <article className="d-flex align-items-center justify-content-between" key={id}>
                        <p className="text-dark">{title}</p>
                        <div>
                            <button className="btn text-success btn-sm" onClick={()=>editItem(id)}><i className="fas fa-edit fs-5"></i></button>
                            <button className="btn text-danger btn-sm" onClick={()=>removeItem(id)}><i className="fas fa-trash fs-5" ></i></button>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default List

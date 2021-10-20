import React from 'react'

function List({items}) {
    return (
        <div>
            {
                items.map(item=>{
                    return <article className="d-flex align-items-center justify-content-between" key={item.id}>
                        <p className="text-dark">{item.title}</p>
                        <div>
                            <button className="btn text-success btn-sm"><i className="fas fa-edit fs-5"></i></button>
                            <button className="btn text-danger btn-sm"><i className="fas fa-trash fs-5"></i></button>
                        </div>
                    </article>
                })
            }
        </div>
    )
}

export default List

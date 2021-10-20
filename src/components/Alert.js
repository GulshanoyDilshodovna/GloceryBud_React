import React, {useEffect} from 'react'

function Alert({deleteAlert, massage, type}) {

    useEffect(()=>{
        const settime = setTimeout(() => {
            deleteAlert()
        }, 3000);
        return ()=> clearTimeout(settime)
    })


    return (
        <div>
            <div className={`alert alert-${type}`} role="alert">
                <p>{massage}</p>
            </div>
        </div>
    )
}

export default Alert

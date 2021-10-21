import React, {useEffect} from 'react'

function Alert({deleteAlert, list, massage, type}) {

    useEffect(()=>{
        const settime = setTimeout(() => {
            deleteAlert()
        }, 2000);
        return ()=> clearInterval(settime)
    },[list])

    return (
        <div>
            <div className={`alert alert-${type}`} role="alert">
                <p>{massage}</p>
            </div>
        </div>
    )
}

export default Alert

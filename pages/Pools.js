import React from 'react'
import { PoolAdd , PoolConnect} from '../components';

const Pools = () => {
    return (
        <div style={{width: "50%" , margin: "5rem auto" , position: "relative"}}>
            <PoolAdd />
            <div style={{marginTop: "20px"}}>
            <PoolConnect />
            </div>
        </div>
    )
}

export default Pools;

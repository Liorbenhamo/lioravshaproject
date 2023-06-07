import React from 'react'
import './newsTicker.css'
import data from '../../flashData.json'
import { useState, useEffect } from "react";

function NewsTicker() {
    const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(data.flashes);
  }, []);
  return (
    <div>
        <div className='news-conainer'>
            <div className='title'>Flashes</div>
            <ul>
                {data1&&data1.map((value,index)=>{
                    return(
                        <li key={index}>
                            {value.flash}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default NewsTicker
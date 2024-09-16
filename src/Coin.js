
import { useEffect, useState } from "react"

const Coin =()=>{

    const [coinsData, setCoinsData]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{

            const data= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const jsonData= await data.json();
            console.log(jsonData.bpi)
            setCoinsData(jsonData)
        }


        fetchData()
    },[])

    return(
        <div>{coinsData?.bpi?.map((item)=> <div>{item}
            </div>)
        }</div>
    )

}

export default Coin
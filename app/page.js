import Image from "next/image";
import './globals.css'
import { client } from "@/sanity/lib/client";

const fetchMainData = async ()=>{
  let mainData = await client.fetch('*[_type == "mainPageDataType"]')
  console.log('fetchMainData',mainData);
  return mainData
  
}

export default async function Home() {
const firstMainData = await fetchMainData()
  return (
   <div className="">
    <div className="">
      {
        firstMainData.map((main,i)=>{
          return(
            <div key={i} className="">
              <h1 className="">{main.heading}</h1>
               <p className="">{main.pera}</p>
      <button>{main.btn}</button>
      <div className="">
        
      </div>
            </div>
          )
        })
      }
     
    </div>
    <div className=""></div>
    <div className=""></div>
    </div>
   
  );
}

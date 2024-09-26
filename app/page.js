import Image from "next/image";
import './globals.css'
import { client } from "@/sanity/lib/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
const builder = ImageUrlBuilder(client)
const getImageUrl = (asset)=>{
  return builder.image(asset).url()
}

const fetchMainData = async ()=>{
  let mainData = await client.fetch( 
    `*[_type == "mainPageDataType"]{
      heading,
      pera,
      btn,
      firstImage {
      asset->{_id, url}
      }
    }`,{},{
      cache:'no-cache'
    }
  )
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
 
                  <Image
                    src={getImageUrl(main.firstImage)}  // Generate the image URL
                    width={200}
                    height={300}
                    alt="Main Image"
                  />
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

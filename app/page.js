import Image from "next/image";
import './globals.css'
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
// import { imageUrlBuilder } from "@sanity/image-url";
// const builder = imageUrlBuilder(client)
// const getImageUrl = (asset) => {
//   return builder.image(asset).url()
// }

const fetchMainData = async () => {
  let mainData = await client.fetch(
    '*[_type == "mainPageDataType"]', {}, {
    cache: 'no-cache'
  }
  )

  return mainData
}

const fetchMiddleData = async()=>{
  let middleData = await client.fetch(
    '*[_type == "middleDataType"]',
    {},
    {
      cache:'no-cache'
    }
  )
  console.log('fetchMiddleData', middleData);
  return middleData
}

const fetchRightData = async()=>{
  let rightData = await client.fetch(
'*[_type == "lastDataType"]',
{},
{
  cache:'no-cache'
}
  )
  return rightData
}

export default async function Home() {
  const firstMainData = await fetchMainData()
  const middleData = await fetchMiddleData()
  const rightData = await fetchRightData()

  console.log('middleDAta',rightData);
  
  return (
    <div className="">
      <div className="">
        {
          firstMainData.map((main, i) => {
            return (
              <div key={i} className="">
                <h1 className="">{main.heading}</h1>
                <p className="">{main.pera}</p>
                <button>{main.btn}</button>
                <div className="">

                  <Image
                    src={urlFor(main.firstImage.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                  />
                  <Image
                    src={urlFor(main.secondImage.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                  />
                </div>
              </div>
            )
          })
        }

      </div>
      <div className="">
        {
          middleData.map((item,i)=>{
            return(
              <div key={i} className="">
                <h1 className="">{item.heading}</h1>
                   <Image
                    src={urlFor(item.Image.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                  />
              </div>
            )
          })
        }
      </div>
      <div className="">
        {
          rightData.map((item,i)=>{
            return(
              <div className="" key={i}>
                <div className="">
                <Image
                    src={urlFor(item.rightFirstImage.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                  />
                   <Image
                    src={urlFor(item.rightSecondImage.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                  />
                </div>
                <h1 className="">{item.heading}</h1>
                <p className="">{item.pera}</p>
              </div>
            )
          })
        }
      </div>
    </div>

  );
}

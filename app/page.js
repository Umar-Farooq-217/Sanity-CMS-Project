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
    <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-8 sm:gap-3 px-12 py-20">
      <div className="">
        {
          firstMainData.map((main, i) => {
            return (
              <div key={i} className="font-serif">
                <h1 className="text-[64px] ">{main.heading}</h1>
                <p className="text-[24px] pt-3">{main.pera}</p>
                <button className="bg-[#457D61] py-3 px-5 text-lg font-bold font-sans rounded-3xl mt-5 text-white">{main.btn}</button>
                <div className="grid grid-cols-2 px-8 ">

                  <Image
                    src={urlFor(main.firstImage.asset).url()}  // Generate the image URL
                    className="h-[300px] w-full mt-24 drop-shadow-xl"
                    width={200}
                    height={300}
                    alt='First Flower image'

                  />
                  <Image
                    src={urlFor(main.secondImage.asset).url()}  // Generate the image URL
                    className="h-[300px] w-full drop-shadow-xl"
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
              <div key={i} className="pt-36 font-serif ">
                <h1 className="text-2xl font-semibold text-center">{item.heading}</h1>
                   <Image
                    src={urlFor(item.Image.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                    className="w-full h-[640px] px-8 mt-2"
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
                <div className="grid grid-cols-2 px-8">
                <Image
                    src={urlFor(item.rightFirstImage.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                    className="h-[300px] w-full  drop-shadow-xl"
                  />
                   <Image
                    src={urlFor(item.rightSecondImage.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                    className="h-[300px] w-full mt-24 drop-shadow-xl"

                  />
                </div>
                <p className="font-serif text-[24px] pt-5 ">{item.pera}</p>
                <h1 className="">{item.heading}</h1>
              </div>
            )
          })
        }
      </div>
    </div>

  );
}

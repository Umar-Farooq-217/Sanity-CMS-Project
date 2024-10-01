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
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-3 lg:px-12 lg:py-20 md:px-6 md:py-10">
      <div className="">
        {
          firstMainData.map((main, i) => {
            return (
              <div key={i} className="font-serif ">
                <h1 className="lg:text-[60px] text-[55px] md:p-0 sm:p-2 ">{main.heading}</h1>
                <p className="text-[24px] pt-3 md:px-0 sm:px-2  ">{main.pera}</p>
                <button className="bg-[#457D61] py-2 hover:scale-110 px-5 text-lg  md:ml-0 sm:ml-2 font-bold font-sans rounded-3xl mt-5 text-white">{main.btn}</button>
                <div className="grid grid-cols-2 px-2 gap-4 ">

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
              <div key={i} className="md:pt-44 sm:pt-14 font-serif ">
                <h2 className="font-bold text-2xl text-center pb-3">Sanity Project</h2>
                <h1 className="text-2xl font-semibold text-center bg-[#457D61] rounded-full py-2 text-white">{item.heading}</h1>
                   <Image
                    src={urlFor(item.Image.asset).url()}  // Generate the image URL
                    width={200}
                    height={300}
                    alt='First Flower image'
                    className="w-full h-[640px] lg:px-8 px-2 pt-3 pb-7"
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
                <div className="grid grid-cols-2 px-4 gap-4">
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
                <p className="font-serif text-[24px] pt-5 md:p-0 sm:p-2 ">{item.pera}</p>
                <h1 className="font-serif text-[64px] md:p-0 sm:p-2 lg:pr-20 md:pr-10 sm:pr-10 pt-5">{item.heading}</h1>
              </div>
            )
          })
        }
      </div>
    </div>

  );
}

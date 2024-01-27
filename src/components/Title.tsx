import Image from "next/image"

export default function Title() {
  return (
    <Image className="absolute mx-auto -mt-80"
           src="/title-login.svg" 
           width={575}
           height={187}
           alt="Titulo"/>
  )
}

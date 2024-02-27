import Image from "next/image"

export default function Title() {
  return (
    <Image className="mx-auto -mt-12"
           src="/title-login.svg" 
           width={575}
           height={187}
           alt="Titulo"/>
  )
}

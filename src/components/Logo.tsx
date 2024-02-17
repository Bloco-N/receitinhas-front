import Image from "next/image"

export default function Logo() {
  return (
        <Image className="absolute mx-auto -mt-[35rem] -ml-4"
               src="/logo-login.svg" 
               width={200}
               height={200}
               alt="Logo" />
  )
}

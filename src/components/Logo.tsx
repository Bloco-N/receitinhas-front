import Image from "next/image"

export default function Logo() {
  return (
        <Image className="mx-auto"
               src="/logo-login.svg" 
               width={175}
               height={175}
               alt="Logo" />
  )
}

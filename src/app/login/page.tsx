import Card from "@/components/Card";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center h-screen items-center overflow-hidden">

      <div className="flex flex-col items-center h-full w-full">
        <div className="hidden lg:flex flex-col self-center -mb-56 z-50">
          <Logo />
          <Title />
        </div>

        <Card className="h-full w-full border-0 lg:h-fit lg:w-fit z-0 lg:pt-48">

          <div className="top-0 h-1/6 lg:hidden bg-chocolate w-full"></div>

          <div className="h-4/6 lg:h-full w-full flex flex-col justify-center lg:p-8 lg:w-fit">
            <Input type="email" placeholder="e-mail"/>
            <Input type="password" placeholder="senha"/>
            <p className="mx-auto font-ubuntu text-chocolate text-base"><Link className="no-underline" href="/recuperar-senha">Esqueci minha senha</Link></p>
            <Button width="w-36" bgColor=" bg-mint">ENTRAR</Button>
            <p className="mx-auto font-ubuntu text-chocolate text-base mt-6">Ainda não tem uma conta? <Link className="no-underline" href="/cadastro">Cadastre-se aqui</Link></p>
          </div>

          <div className="bottom-0 h-1/6 lg:hidden bg-cotton-candy w-full"></div>
          
        </Card>
      </div>

    </div>  
  );
}

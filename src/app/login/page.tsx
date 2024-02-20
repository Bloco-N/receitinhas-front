import Card from "@/components/Card";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center h-screen items-center relative mt-10">

      <Logo />
      <Title />
      <Card className="w-11/12 h-2/3 sm:w-[23rem] sm:h-[35rem]"/>

      <div className="absolute flex flex-col mt-44">
        <Input type="email" placeholder="e-mail"/>
        <Input type="password" placeholder="senha"/>
        <p className="mx-auto font-ubuntu text-chocolate text-base"><Link className="no-underline" href="/recuperar-senha">Esqueci minha senha</Link></p>
        <Button width="w-36" bgColor=" bg-mint">ENTRAR</Button>
        <p className="mx-auto font-ubuntu text-chocolate text-base mt-6">Ainda não tem uma conta? <Link className="no-underline" href="/cadastro">Cadastre-se aqui</Link></p>
      </div>

    </div>  
  );
}

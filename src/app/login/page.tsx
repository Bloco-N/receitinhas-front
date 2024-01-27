import Card from "@/components/Card";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-svh items-center pt-28 relative">

      <Logo />
      <Title />
      <Card dimensions="w-[25rem] h-[38rem]"/>

      <div className="absolute flex flex-col mt-44">
        <Input type="email" placeholder="e-mail"/>
        <Input type="password" placeholder="senha"/>
        <p className="mx-auto font-ubuntu text-chocolate text-base">Esqueci minha senha</p>
        <Button text="ENTRAR" width="w-36" bgColor=" bg-mint"/>
        <p className="mx-auto font-ubuntu text-chocolate text-base">Ainda não tem uma conta? <Link className="no-underline" href="/cadastro">Cadastre-se aqui</Link></p>
      </div>

    </div>  
  );
}

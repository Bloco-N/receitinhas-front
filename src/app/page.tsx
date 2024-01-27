import Card from "@/components/Card";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import Title from "@/components/Title";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-svh items-center pt-28 relative">

      <Logo />
      <Title />
      <Card />

      <div className="absolute flex flex-col mt-44">
        <Input type="email" placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <p className="mx-auto">Esqueci minha senha</p>
        <Button />
        <p className="mx-auto">Ainda não tem conta? Cadastre-se aqui</p>
      </div>

    </div>  
  );
}

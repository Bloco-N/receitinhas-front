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
        <Input type="email" placeholder="e-mail"/>
        <Input type="password" placeholder="senha"/>
        <p className="mx-auto font-ubuntu text-chocolate text-base">Esqueci minha senha</p>
        <Button />
        <p className="mx-auto font-ubuntu text-chocolate text-base">Ainda não tem uma conta? Cadastre-se aqui</p>
      </div>

    </div>  
  );
}

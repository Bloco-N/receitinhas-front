import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Cadastro() {
  return (
    <div className="flex flex-col justify-center h-screen items-center relative">

      <Card className="w-11/12 h-3/5 sm:w-[26rem] sm:h-[30rem]"/>

      <div className="absolute flex flex-col">

        <Input type="text" placeholder="nome"/>
        <Input type="email" placeholder="e-mail"/>
        <Input type="password" placeholder="senha"/>
        <Input type="password" placeholder="confirmar senha"/>

        <Button width="w-48" bgColor=" bg-mint">CADASTRAR</Button>

      </div>

    </div>  
  );
}

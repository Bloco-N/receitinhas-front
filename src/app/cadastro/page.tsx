import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-svh items-center relative">

      <Card className="w-[26rem] h-[30rem]"/>

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

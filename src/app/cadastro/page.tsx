import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-svh items-center relative">

      <Card dimensions="w-[28rem] h-[32rem]"/>

      <div className="absolute flex flex-col">

        <Input type="text" placeholder="nome"/>
        <Input type="email" placeholder="e-mail"/>
        <Input type="password" placeholder="senha"/>
        <Input type="password" placeholder="confirmar senha"/>

        <Button text="CADASTRAR" width="w-48" bgColor=" bg-mint"/>

      </div>

    </div>  
  );
}

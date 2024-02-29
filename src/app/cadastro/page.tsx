import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Cadastro() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">

      <Card className="w-11/12 h-3/5 flex flex-col justify-center sm:w-[26rem] sm:h-[30rem]">

        <Input type="text" placeholder="nome"/>
        <Input type="email" placeholder="e-mail"/>
        <Input type="password" placeholder="senha"/>
        <Input type="password" placeholder="confirmar senha"/>

        <Button width="w-48" bgColor=" bg-mint">CADASTRAR</Button>

      </Card>

    </div>  
  );
}

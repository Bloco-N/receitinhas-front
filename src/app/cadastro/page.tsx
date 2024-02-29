import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Cadastro() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">

      <Card className="h-full w-full flex flex-col justify-center border-0 lg:h-fit lg:w-fit lg:p-5">

        <div className="h-1/6 border-b-4 border-chocolate w-full lg:hidden" style={{background: "linear-gradient(to right, #FF97B8 20%, #FFFFFF 20%, #FFFFFF 40%, #FF97B8 40%, #FF97B8 60%, #FFFFFF 60%, #FFFFFF 80%, #FF97B8 80%, #FF97B8 100%)"}}></div>

        <div className="h-4/6 lg:h-full w-full flex flex-col justify-center lg:p-8 lg:w-fit">

          <Input type="text" placeholder="nome"/>
          <Input type="email" placeholder="e-mail"/>
          <Input type="password" placeholder="senha"/>
          <Input type="password" placeholder="confirmar senha"/>

          <Button width="w-48" bgColor=" bg-mint">CADASTRAR</Button>

        </div>

        <div className="h-1/6 border-t-4 border-chocolate w-full lg:hidden" style={{background: "linear-gradient(to right, #FF97B8 20%, #FFFFFF 20%, #FFFFFF 40%, #FF97B8 40%, #FF97B8 60%, #FFFFFF 60%, #FFFFFF 80%, #FF97B8 80%, #FF97B8 100%)"}}></div>

      </Card>

    </div>  
  );
}

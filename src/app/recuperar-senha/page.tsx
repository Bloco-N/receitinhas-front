import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function RecuperarSenha() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">

      <Card className="w-11/12 h-1/2 flex flex-col justify-center sm:w-[28rem] sm:h-[20rem]">

        <p className="font-ubuntu mx-auto text-chocolate mb-10 text-xl">Digite o e-mail para recuperar sua senha:</p>

        <Input type="email" placeholder="e-mail"/>

        <Button width="w-72" bgColor=" bg-mint">REDEFINIR SENHA</Button>

      </Card>

    </div>  
  );
}

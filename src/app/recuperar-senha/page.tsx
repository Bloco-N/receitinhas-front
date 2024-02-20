import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function RecuperarSenha() {
  return (
    <div className="flex flex-col justify-center h-screen items-center relative">

      <Card className="w-11/12 h-1/2 sm:w-[28rem] sm:h-[20rem]"/>

      <div className="absolute flex flex-col">

        <p className="font-ubuntu text-chocolate mb-10 text-xl">Digite o e-mail para recuperar sua senha:</p>

        <Input type="email" placeholder="e-mail"/>

        <Button width="w-72" bgColor=" bg-mint">REDEFINIR SENHA</Button>

      </div>

    </div>  
  );
}

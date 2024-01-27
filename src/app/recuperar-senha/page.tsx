import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-svh items-center relative">

      <Card dimensions="w-[30rem] h-[24rem]"/>

      <div className="absolute flex flex-col">

        <p className="font-ubuntu text-chocolate mb-10 text-xl">Digite o e-mail para recuperar sua senha:</p>

        <Input type="email" placeholder="e-mail"/>

        <Button text="REDEFINIR SENHA" width="w-64" bgColor=" bg-mint"/>

      </div>

    </div>  
  );
}


type InputProps = {
    type: string;
    placeholder: string;
};

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input type={type}
           placeholder={placeholder}
           className="box-content w-72 h-10 rounded-full border-[3px] text-lg border-cotton-candy focus:outline-none mb-6"/>
  )
}


type ButtonProps = {
  text: string;
  width: string;
  bgColor: string;
};

export default function Button({ text, width, bgColor }: ButtonProps) {

  const className = "mx-auto mt-10 mb-6 h-14 rounded-xl border-2 border-coffee text-vanilla text-3xl font-modak font-stroke " + width + bgColor;

  return (
    <button className={className}>{text}</button>
  )
}

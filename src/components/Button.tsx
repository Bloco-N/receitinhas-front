
type ButtonProps = {
  width: string;
  bgColor: string;
  children: React.ReactNode;
};

export default function Button({ children, width, bgColor }: ButtonProps) {

  const className = "mx-auto mt-10 h-14 rounded-xl border-2 border-coffee text-vanilla text-3xl font-modak font-stroke " + width + bgColor;

  return (
    <button className={className}>{children}</button>
  )
}

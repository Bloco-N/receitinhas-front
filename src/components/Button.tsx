
type ButtonProps = {
  className: string;
  children: React.ReactNode;
};

export default function Button({ className, children }: ButtonProps) {

  const style = "mx-auto mt-10 h-14 rounded-xl border-2 border-coffee text-vanilla text-3xl font-modak font-stroke " + className;

  return (
    <button className={style}>{children}</button>
  )
}


type CardProps = {
  className: string;
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {

  const style = className + " lg:rounded-[4rem] bg-chantilly lg:border-[3px] border-chocolate outline-cotton-candy outline-dashed outline-[10px] ring-[3px] ring-coffee ring-offset-[10px]";

  return (
    <div className={style}>{children}</div>
  )
}
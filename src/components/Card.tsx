
type CardProps = {
  className: string;
};

export default function Card({ className }: CardProps) {

  const style = className + " rounded-[4rem] bg-chantilly border-[3px] border-chocolate outline-cotton-candy outline-dashed outline-[10px] ring-[3px] ring-coffee ring-offset-[10px] custom-shadow";

  return (
    <div className={style}></div>
  )
}
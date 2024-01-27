
type CardProps = {
  dimensions: string;
};

export default function Card({ dimensions }: CardProps) {

  const className = dimensions + " bg-100%";

  return (
    <div style={{backgroundImage: 'url(/card.svg)'}} className={className}></div>
  )
}
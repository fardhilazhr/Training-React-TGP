import Button from "./Button";
interface BookItemProps {
  title: string;
  author: string;
  imageUrl: string;
}
export default function BookItem({ title, author, imageUrl }: BookItemProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img className="w-full" src={imageUrl} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-7">{author}</p>
        <Button label="Read more" onClick={() => {}} />
      </div>
    </div>
  );
}

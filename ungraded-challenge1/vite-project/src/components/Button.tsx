interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="font-normal py-2 px-4 rounded bg-neutral-600 hover:bg-gray-800 text-white hover:text-white shadow-md shadow-gray-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

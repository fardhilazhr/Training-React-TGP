interface ButtonProps {
  label: string,
  onClick: () => void,
  color?: string
}

// stateless component dapat data dari parent -> mostly children
// contoh pakai interface
export default function Button({label, onClick, color }: ButtonProps) {
  return (
    <button style={{ 
        padding: "10px 20px", 
        backgroundColor: color ?? 'blue', 
        color: "white", 
        border: "none", 
        borderRadius: "5px", 
        margin:"5px" }} 
        onClick={onClick}>{label}</button>
  )
}

interface HelloProps {
  name: string,
  age: number
}

const Hello: React.FC<HelloProps> = ({ name, age }) => {
  return (
    <h1>Hello { name } - {age}</h1>
  )
}

export default Hello
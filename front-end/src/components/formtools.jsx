const formtools = ({text,htmlfor}) => {
  return (
    <form className="text-center">
      <input type="checkbox" />
      <label htmlFor={htmlfor}>{text}</label>
    </form>
  )
}

export default formtools
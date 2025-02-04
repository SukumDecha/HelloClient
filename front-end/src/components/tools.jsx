const tools = () => {
    return (
      <div>formtools</div>
    )
  }
  
  export default tools;


import Formtools from "./formtools"

const tools = () => {
  return (
    <div className="toolscontent">
        <Formtools text="What you looking for ?"/>
        <p>|</p>
        <Formtools text="Date/Time"/>
        <p>|</p>
        <Formtools text="Building"/>
        <button className="search-btn">Search</button>
    </div>
  )
}

export default tools

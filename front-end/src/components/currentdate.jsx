const currentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      weekday: "short"
    });
  };
  
  export default currentDate;
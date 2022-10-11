const Card = (props) => {
  return (
    <div className="my-4 bg-white h-20 shadow-md rounded p-4 border border-white dark:border-[#585858]">
      {props.children}
    </div>
  );
};

export default Card;

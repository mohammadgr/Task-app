const Card = (props) => {
  return (
    <div className="mt-2 mb-2 bg-[#E8E8E8] dark:bg-[#696969] h-16 shadow-md dark:shadow-lg rounded p-4 border border-[#F0F0F0] dark:border-[#585858]">
      {props.children}
    </div>
  );
};

export default Card;

const Button = ({
  title,
  bgColor,
  textColor,
  hoverColor,
  hoverTextColor,
  clickHandler
}) => {
  // const onClickHandler = () => {
  //   clickHandler()
  // }

  return (
    <button
      className={`min-w-fit h-12 rounded p-3 font-semibold shadow-md ${bgColor} ${textColor} hover:${hoverColor} hover:${hoverTextColor}`}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
};

export default Button;

const InputField = ({
  label,
  type,
  name,
  handleChange,
  errorMessage,
  isValid,
  value
}) => {
  return (
    <div className="">
      <label className="block font-semibold mb-3 dark:text-gray-200">
        {label}
      </label>
      <input
        className="block w-4/5 h-8 p-2 rounded outline-0 ring-1 ring-blue-200 focus:ring-yellow-400 dark:bg-gray-200"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
      {errorMessage && isValid && (
        <span className="block text-red-500 text-xs mx-2 my-3">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputField;

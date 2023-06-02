export const Button = (props) => {
  const { className, onClick, disabled, text } = props;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

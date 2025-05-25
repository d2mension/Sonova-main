export const Input = ({ inputRef, value, onChange, className, props }) => {
  return (
    <>
      <input ref={inputRef} {...props} value={value} onChange={onChange} className={className}/>
    </>
  );
};

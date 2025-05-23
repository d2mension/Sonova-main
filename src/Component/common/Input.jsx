export const Input = ({ inputRef, value, onChange, props }) => {
  return (
    <>
      <input ref={inputRef} {...props} value={value} onChange={onChange} />
    </>
  );
};

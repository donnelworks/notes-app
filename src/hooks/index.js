import { useState } from "react";

function useInput(val = "") {
  const [value, setValue] = useState(val);
  const onInputHandle = (e) => {
    setValue(e.target.value);
  };

  return [value, onInputHandle];
}

export { useInput };

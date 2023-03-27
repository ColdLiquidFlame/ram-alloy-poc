import { forwardRef, useImperativeHandle } from "react";
import Button from "../Shared/TextButton";

const ButtonEditor = forwardRef(({ api }, ref) => {
  useImperativeHandle(ref, () => {
    return {
      getValue() {
        return null;
      },
    };
  });

  return (
    <>
      <Button onClick={() => api.stopEditing()}>Save</Button>
      <Button onClick={() => api.stopEditing(true)}>Cancel</Button>
    </>
  );
});

export default ButtonEditor;

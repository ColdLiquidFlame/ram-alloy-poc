import { forwardRef, useImperativeHandle } from "react";
import Button from "../Shared/Button";

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
      <Button
        sx={{ minWidth: "unset", height: "2.5em" }}
        onClick={() => api.stopEditing()}
      >
        Save
      </Button>
      <Button
        sx={{ minWidth: "unset", height: "2.5em" }}
        onClick={() => api.stopEditing(true)}
      >
        Cancel
      </Button>
    </>
  );
});

export default ButtonEditor;

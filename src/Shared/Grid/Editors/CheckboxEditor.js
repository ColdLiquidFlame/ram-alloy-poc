import { Checkbox } from "@mui/material";
import { forwardRef, useImperativeHandle, useState, memo } from "react";

const CheckboxEditor = memo(
  forwardRef((props, ref) => {
    const {
      column: { colId },
      data: { roles },
    } = props;

    const [value, setValue] = useState((roles ?? []).includes(colId));

    useImperativeHandle(ref, () => {
      return {
        getValue() {
          return value;
        },
      };
    });

    return <Checkbox checked={value} onChange={() => setValue(!value)} />;
  })
);

export default CheckboxEditor;

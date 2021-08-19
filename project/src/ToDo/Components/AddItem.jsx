import { memo, useCallback, useMemo, useState } from "react";
import { addTodo } from "../Requests";
import Button from "@material-ui/core/Button";

export const AddItem = memo(({ updateDetector }) => {
  const [item, setItem] = useState("");

  const handleAdd = useCallback(async () => {
    await addTodo(item);
    updateDetector();
  }, [item, updateDetector]);

  const handleInput = useCallback((e) => {
    setItem(e.target.value);
  }, []);

  const hello = useMemo(() => ({ name: "Lis", age: 99 }), []);

  return (
    <div>
      <input type="text" value={item} onChange={handleInput} />
      <Button
        color="primary"
        variant="contained"
        onClick={handleAdd}
        hello={hello}
      >
        Add
      </Button>
    </div>
  );
});

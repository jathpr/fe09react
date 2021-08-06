import { ListItem } from "./ListItem";

export const TodoList = ({ list, onUpdate }) => {
  return list.map((listItem) => (
    <ListItem key={listItem.id} listItem={listItem} onUpdate={onUpdate} />
  ));
};

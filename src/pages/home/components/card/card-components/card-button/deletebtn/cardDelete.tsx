export const CardDelete: React.FC<{
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDelete: boolean;
  onRecover: () => void;
}> = ({ isDelete, onDelete, onRecover }) => {
  if (isDelete) {
    return <button onClick={onRecover}>Recover</button>;
  }

  return <button onClick={onDelete}>delete</button>;
};

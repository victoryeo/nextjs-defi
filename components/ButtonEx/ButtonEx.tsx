import Button from "react-bootstrap/Button";

interface ButtonProps {
  id: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
  bsPrefix?: string;
}

export const ButtonEx = ({ id, title, onClick, disabled, bsPrefix }: ButtonProps) => {
  return (
    <div>
      <Button id={id} onClick={onClick} disabled={disabled} bsPrefix={bsPrefix}>
        {title}
      </Button>
    </div>
  );
}
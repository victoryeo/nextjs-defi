import Button from "react-bootstrap/Button";

interface ButtonProps {
  id: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ButtonEx = ({ id, title, onClick, disabled }: ButtonProps) => {
  return (
    <div>
      <Button id={id} onClick={onClick} disabled={disabled}>{title}
      </Button>
    </div>
  );
}
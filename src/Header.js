import { HeaderWraper, HeaderText, Button } from "./styled";

const Header = ({ setModal }) => {
  return (
    <HeaderWraper>
      <HeaderText>Interview Calendar</HeaderText>
      <Button
        onClick={() => {
          setModal(true);
        }}
      >
        +
      </Button>
    </HeaderWraper>
  );
};

export default Header;

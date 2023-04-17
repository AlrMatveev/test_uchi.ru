import { FooterWraper, Button } from "./styled";

const Footer = ({ setDate, time, setTime }) => {
  return (
    <FooterWraper>
      <Button
        onClick={() => {
          setDate(new Date());
        }}
        size={"10px"}
      >
        Today
      </Button>
      {time && (
        <Button onClick={() => setTime(null)} size={"10px"}>
          Delete
        </Button>
      )}
    </FooterWraper>
  );
};

export default Footer;

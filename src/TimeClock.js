import { TimeClockWraper } from "./styled";

const TimeClock = ({ children, ...props }) => {
  const time =
    props.time + 8 < 10
      ? "0" + (props.time + 8) + ":00"
      : props.time + 8 + ":00";
  return (
    <>
      <TimeClockWraper>{props.first && time}</TimeClockWraper>
      {children}
    </>
  );
};

export default TimeClock;

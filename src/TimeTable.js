import { Table } from "./styled";
import TimeClock from "./TimeClock";

const TimeTable = ({ time, setTime }) => {
  return (
    <Table>
      {Array(13)
        .fill()
        .map((_, i) => (
          <div key={i}>
            {Array(7)
              .fill()
              .map((_, j) => (
                <TimeClock time={i} first={j === 0 && i > 0}>
                  <div
                    style={{
                      backgroundColor:
                        time && time[0] === i && time[1] === j ? "#b3b7ff" : "",
                    }}
                    key={i + j}
                    onClick={() => {
                      setTime([i, j]);
                    }}
                  ></div>
                </TimeClock>
              ))}
          </div>
        ))}
    </Table>
  );
};

export default TimeTable;

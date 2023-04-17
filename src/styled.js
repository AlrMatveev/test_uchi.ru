import styled from "styled-components";

export const Main = styled.div`
  max-width: 740px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
`;

export const ModalWraper = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  > div {
    width: 280px;
    background: #e6e6e7;
    border-radius: 30px;
    text-align: center;
  }
  button {
    margin-top: 10px;
    width: 50%;
    font-size: 24px;
    height: 50px;
    border: none;
    border-top: 1px solid #ccc;
    background: none;
    color: #0d7dfc;
  }
  h3 {
    font-size: 20px;
    margin: 15px 0 0 0;
  }
  input {
    margin-top: 15px;
    width: 230px;
  }
`;

export const HeaderWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px;
`;
export const HeaderText = styled.div`
  flex: 1;
  font-size: 20px;
`;
export const Button = styled.button`
  font-size: ${(props) => (props.size ? "18px" : "24px")};
  height: 30px;
  color: #ff3030;
  cursor: pointer;
  background: none;
  border-color: transparent;
`;

export const CalendarWraper = styled.div`
  background-color: #f6f6f6;
  padding: 10px 20px;
  border-top: 2px solid #d2d2d2;
  border-bottom: 2px solid #d2d2d2;
`;

export const Week = styled.div`
  display: flex;
`;

export const Day = styled.div`
  font-size: 16px;
  flex-grow: 1;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:first-child {
      font-size: 12px;
    }
    &:last-child {
      padding: 5px;
      span {
        text-align: center;
        cursor: pointer;
        font-size: 20px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: ${(props) => (props.selected ? "#ff3030" : "")};
        color: ${(props) => (props.selected ? "white" : "")};
      }
    }
  }
`;

export const Month = styled.div`
  display: flex;
  font-size: 16px;
  div {
    display: flex;
    width: 100%;
  }
  span {
    margin: auto;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1 0 auto;
  width: 100% - 40px;
  margin-left: 40px;
  > div {
    position: relative;
    &:first-child {
      height: 70%;
    }
    &:last-child {
      height: 70%;
      border-bottom: none;
    }
    display: flex;
    height: 100%;
    border-bottom: 1px solid #d2d2d2;
  }
  > div > div {
    height: 100%;
    flex-basis: 100%;
    border-right: 1px solid #d2d2d2;

    &:last-child {
      border-right: none;
    }
  }
`;

export const FooterWraper = styled.div`
  display: flex;
  background-color: #f6f6f6;
  padding: 20px;
  border-top: 2px solid #d2d2d2;
  justify-content: space-between;
`;

export const TimeClockWraper = styled.span`
  font-size: 12px;
  position: absolute;
  left: -35.5px;
  top: -9px;
  color: #777;
`;

import styled from "styled-components";
import { User } from "../../components/User";
import { ContentCard } from "../../components/ContentCard";

export const Container = styled.div`
  padding: 20%;
  background: #E0E0E0;
`;

export const UsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserContainer = styled.div``;

export const StyledUser = styled(User)`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledContentCard = styled(ContentCard)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 24px;
  background: white;
  padding: 8px;
  margin-right: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.button`
  border-radius: 37px;
  width: 40%;
  height: 110%;
`;

export const ButtonPrimary = styled(Button)`
  background: #1C33EE;
  color: white;
`;

export const ImageContainer = styled.div`
  position: relative;
  color: white;
`;

export const Image = styled.img`
  border-radius: 16px;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
`;

const getColor = (props) => {
  switch(props) {
    case 'yellow': return '#FFF186';
    case 'green': return '#D6F559';
    case 'red': return '#FF8686';
    default: return '#FFF186';
  }
};
const Status = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 8px;
  right: 8px;
  border-radius: 37px;
  color: black;
  padding: 8px;
`;

export const Line = styled.hr`
  width: 100%;
  text-align: left;
`;

export const Approved = styled(Status)`
  background-color: ${getColor('green')};
`;
export const Pending = styled(Status)`
  background-color: ${getColor('yellow')};
`;
export const Rejected = styled(Status)`
  background-color: ${getColor('red')};
`;

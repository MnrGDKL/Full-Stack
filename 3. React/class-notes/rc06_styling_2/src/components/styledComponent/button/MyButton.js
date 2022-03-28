import styled from 'styled-components';

const MyButton = styled.button`
  background-color:${(props=> (props.color ? "blue" : "purple"))};
  border: none;
  margin: 5px;
  color: white;
  padding: 12px 28px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
`;

export default MyButton;
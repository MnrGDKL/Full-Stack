import styled, {css} from 'styled-components';

export default styled.a`
  color: ${props=>props.color || "black"};
  text-decoration: none;
  font-size: 1.5rem;
  margin: 1rem;

  ${props=>props.secondary && css`
    background-color: green;
    border-radius: 8px;
    padding: 8px;
  `}

  &:hover {
  color: ${props=>props.hoverColor || "red"};
  }
`;


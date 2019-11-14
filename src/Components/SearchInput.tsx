import React from "react";
import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

interface Props {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const SearchInput: React.SFC<Props> = props => {
  return (
    <Container>
      <input type="text" placeholder="Buscar" {...props} />
      <FaSearch />
    </Container>
  );
};

const Container = styled.label`
  border: 1px solid #333;
  border-radius: 4px;
  display: flex;
  align-items: center;

  padding: 1rem 1.5rem;
  overflow: hidden;

  width: 100%;

  & input {
    flex: 1;
    border: none;
    appearance: none;
    font-size: 1.2rem;

    outline: none;
  }

  & svg {
    color: #eee;
    transition: all 200ms ease;
  }

  &:hover svg,
  & input:focus ~ svg {
    color: #333;
  }
`;

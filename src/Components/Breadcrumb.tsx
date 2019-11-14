import React from "react";
import styled from "@emotion/styled";
import { cx } from "../Utils/ClassName";

interface Props {
  selectState: number;
  items: { name: string; action?: () => void }[];
}

export const Breadcrumb: React.SFC<Props> = ({ items, selectState }) => {
  return (
    <Container>
      <ul>
        {items.map((item, idx) => {
          const isDisabled = idx > selectState + 1;
          return (
            <li key={item.name}>
              <a
                onClick={() => item.action && item.action()}
                className={cx({ isDisabled })}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  font-size: 1rem;

  & ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  & li {
    align-items: center;
    display: flex;
  }

  & li + li::before {
    content: "/";
    color: #333;
    font-size: inherit;
  }

  & a {
    align-items: center;
    color: #3273dc;
    display: flex;
    justify-content: center;
    padding: 0 0.75em;
    text-decoration: none;
    cursor: pointer;
  }

  & a.isDisabled {
    color: #eee;
  }
`;

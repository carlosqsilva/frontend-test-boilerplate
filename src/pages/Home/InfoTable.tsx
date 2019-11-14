import React, { PureComponent } from "react";

//@ts-ignore
import debounce from "lodash.debounce";
import { SearchInput } from "../../Components/SearchInput";
import { VehicleInfo } from "../../store/Main/store.types";
import styled from "@emotion/styled";

interface Props {
  title: string;
  data: VehicleInfo[];
  select(cod: string): void;
}

interface State {
  searchTerm: string;
}

export class InfoTable extends PureComponent<Props, State> {
  filterData: (e: any) => void;

  constructor(props: Props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.filterData = debounce((searchTerm: string) => {
      this.setState({ searchTerm });
    }, 800);
  }

  onChangeSearch = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.filterData(value);
  };

  render() {
    const { searchTerm } = this.state;

    let { data, title } = this.props;

    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i");
      data = data.filter(d => regex.test(d.nome));
    }

    return (
      <Container>
        <SearchInput onChange={this.onChangeSearch} />
        <h1>{title}</h1>
        <List>
          {data.map(item => (
            <li
              key={item.codigo}
              onClick={() => this.props.select(item.codigo)}
            >
              {item.nome}
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: min-content min-content 1fr;
  overflow: hidden;

  position: absolute;
  width: 100%;
  bottom: 0;
  top: 0;
`;

const List = styled.ul`
  list-style: none;
  overflow: auto;

  & li {
    color: #242424;
    font-weight: 600;
    padding: 0.35rem;
    cursor: pointer;
  }

  & li:nth-child(even) {
    background: whitesmoke;
  }
`;

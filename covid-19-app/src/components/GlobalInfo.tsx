import styled from '@emotion/styled';
import React from 'react';

interface Props {
  newConfirmed: number;
  newDeaths: number;
  newRecovered: number;
}

const Wrapper = styled.div`
  text-align: center;
`;

const GlobalInfo: React.FC<Props> = ({
  newConfirmed,
  newDeaths,
  newRecovered,
}: Props) => {
  return (
    <Wrapper>
      <h1>Global Covi-19 Data</h1>
      <h3>New Confirmed:{new Intl.NumberFormat().format(newConfirmed)}</h3>
      <h3>New Deaths:{new Intl.NumberFormat().format(newDeaths)}</h3>
      <h3>New Recovered:{new Intl.NumberFormat().format(newRecovered)}</h3>
    </Wrapper>
  );
};

export default GlobalInfo;

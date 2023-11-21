import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.5em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}

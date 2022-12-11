import styled from "styled-components"

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;

  /* Small */
  @media (min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 750px;
  }

  /* Medium */
  @media (min-width: 992px) {
    width: 970px;
  }

  /* Large */
  @media (min-width: 1200px) {
    width: 1170px;
  }

  /* X Large */
  @media (min-width: 1400px) {
    width: 1320px;
  }
`

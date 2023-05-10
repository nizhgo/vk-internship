import styled from "styled-components";

export const AppContainer = styled.div`
      max-width: 512px;
  width: 100%;
  padding: 12px 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Header = styled.header`
display: flex;
justify-content: start;
align-items: center;
gap: 8px
`

export const Logo = styled.img`
width: 64px;
  height: 64px;
`

export const Title = styled.h1`
  color: #1a1a1a;
  font-weight: 700;
  line-height: 1.2;
  font-size: 2em;
`


export const Card = styled.div`
  padding: 16px 16px;
  display: flex;
  border-radius: 16px;
  background-color: #eff3f5;
`



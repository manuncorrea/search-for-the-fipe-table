import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  h3 {
    text-align: center;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`

export const Box = styled.div`
  width: 30rem;
  max-width: 100%;

  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  gap: 1rem;

  box-shadow: 0px 0px 15px rgba(227, 224, 230, 1);

  .item {
    margin-bottom: 1rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`

export const Form = styled.form`
  width: 100%;
`

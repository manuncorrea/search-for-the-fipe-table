import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Box = styled.div`
  width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  gap: 1rem;

  box-shadow: 0px 0px 15px rgba(227, 224, 230, 1);

  .item {
    margin-bottom: 1rem;
  }
`
export const Form = styled.form`
  width: 100%;
`

import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--green-200);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  h1 {
    font-size: 2rem;
    text-align: center;
    padding: 0 1.25rem;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-weight: bold;
    text-align: center;
  }

  span {
    color: var(--gray-500);
  }

  @media (max-width: 768px) {
    padding: 0.625rem;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.3125rem;
    h1 {
      font-size: 1.2rem;
      padding: 0 0.625rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`

import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-900']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    font-weight: bold;
    color: ${(props) => props.theme['green-300']};
    background-color: transparent;
    cursor: pointer;

    &:hover {
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

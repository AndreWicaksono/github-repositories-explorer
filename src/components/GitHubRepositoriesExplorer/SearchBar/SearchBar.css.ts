import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media only screen and (min-width: 640px) {
    /* Tailwind CSS Smallest Breakpoint */
    flex-direction: row;

    & *:first-child {
      margin-right: 1rem;
    }
  }
`;

export const Input = styled.input`
  flex: 1;

  background-color: #f2f2f2;
  border: 1px solid #e0e0e0;
  color: #333;
  font-size: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.875rem;

  &::placeholder {
    color: 1px solid #e0e0e0;
  }

  @media only screen and (min-width: 640px) {
    /* Tailwind CSS Smallest Breakpoint */
    margin-bottom: unset;
  }
`;

export const Button = styled.button`
  background-color: #2d9cdb;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

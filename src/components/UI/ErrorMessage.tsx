import styled from "styled-components";

const Message = styled.p`
  color: red;
  text-align: center;
`;

export default function ErrorMessage({ message }: { message: string }) {
  return <Message>{message}</Message>;
}

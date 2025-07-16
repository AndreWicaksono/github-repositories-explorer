import styled from "styled-components";

export const List = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1rem;
`;

export const Repo = styled.li`
  background-color: #e0e0e0;
  margin-bottom: 0.5rem;
  padding: 0.75rem 0.5rem;
  list-style: none;
`;

export const RepoHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StargazersContainer = styled.div`
  display: inline-flex;
  align-items: center;

  span {
    font-size: 0.875rem;
    font-weight: 700;
  }
`;

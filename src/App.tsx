import "./tailwind-utilities.css";

import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import GitHubRepositoriesExplorer from "./components/GitHubRepositoriesExplorer/GitHubRepositoriesExplorer";

const AppContainer = styled.main`
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <GitHubRepositoriesExplorer />
      </AppContainer>
    </>
  );
}

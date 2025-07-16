import { useRef, useState, useLayoutEffect } from "react";

import type { IGitHubUserItems, IUserRepos_Object } from "../../../../types";

import Chevron from "../../../UI/Chevron";
import RepoList from "../../../GitHubRepositoriesExplorer/RepoList/RepoList";
import RepoListLoading from "../../../GitHubRepositoriesExplorer/RepoList/RepoListLoading";

import { AnimatedPanel, Container, Header, Username } from "./UserItem.css";
import { fetchGitHubUserRepos } from "../../../../api/fetchGitHubUsers";

interface Props {
  user: IGitHubUserItems;
}

export default function UserItem({ user }: Props) {
  const [fetchResult, setFetchResult] = useState<{
    data: IUserRepos_Object[] | null;
    error: string | null;
    isLoading: boolean;
  }>({ data: null, error: null, isLoading: false });

  const [expanded, setExpanded] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);

  const refContent = useRef<HTMLDivElement>(null);
  const refHeader = useRef<HTMLButtonElement>(null);

  const toggle = async () => {
    const willExpand = !expanded;

    setExpanded(willExpand);

    if (willExpand && !fetchResult.data && !fetchResult.isLoading) {
      setFetchResult((prevState) => ({ ...prevState, isLoading: true }));

      try {
        const res = await fetchGitHubUserRepos(user.login);

        setFetchResult((prevState) => ({ ...prevState, data: res }));
      } catch (err) {
        setFetchResult((prevState) => ({
          ...prevState,
          data: [],
          error: (err as Error).message,
        }));
      } finally {
        setFetchResult((prevState) => ({ ...prevState, isLoading: false }));
      }
    }
  };

  // Measure content height when expanded changes or repos loaded and scroll viewport into expanded <Header />
  useLayoutEffect(() => {
    if (expanded && refContent.current) {
      setPanelHeight(refContent.current.scrollHeight);

      refHeader.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setPanelHeight(0);
    }
  }, [expanded, fetchResult.data, fetchResult.isLoading]);

  return (
    <Container>
      <Header aria-expanded={expanded} onClick={toggle} ref={refHeader}>
        <Username onClick={toggle}>{user.login}</Username>
        <Chevron rotated={expanded} />
      </Header>

      <AnimatedPanel $open={expanded} $panelHeight={panelHeight}>
        <div ref={refContent}>
          {fetchResult.isLoading ? (
            <RepoListLoading />
          ) : (
            <RepoList repos={fetchResult.data} />
          )}
        </div>
      </AnimatedPanel>
    </Container>
  );
}

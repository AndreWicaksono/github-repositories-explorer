import { Star } from "lucide-react";

import type { IUserRepos_Object } from "../../../types";

import { List, Repo, RepoHeading, StargazersContainer } from "./RepoList.css";

interface Props {
  repos: IUserRepos_Object[] | null;
}

export default function RepoList({ repos }: Props) {
  if (!repos || repos.length === 0) return <p>No repositories.</p>;

  return (
    <List>
      {repos.map((repo) => (
        <Repo key={repo.id}>
          <RepoHeading>
            <strong>{repo.name}</strong>

            <StargazersContainer>
              <span className="pr-1">{repo.stargazers_count}</span>
              <Star fill="#222" height={16} width={16} />{" "}
            </StargazersContainer>
          </RepoHeading>

          <div>{repo.description}</div>
        </Repo>
      ))}
    </List>
  );
}

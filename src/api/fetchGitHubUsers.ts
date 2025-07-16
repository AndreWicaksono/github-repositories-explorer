import type {
  IFetchResponseGetGitHubUsers,
  FetchResponseGetGitHubUserRepos_Type,
} from "../types";

export async function fetchSearchGitHubRepositoriesByUsername(
  username: string,
): Promise<IFetchResponseGetGitHubUsers> {
  const res = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(username)}&per_page=5`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub users");
  }

  const data = (await res.json()) as IFetchResponseGetGitHubUsers;

  return data;
}

export async function fetchGitHubUserRepos(
  username: string,
): Promise<FetchResponseGetGitHubUserRepos_Type> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) {
    throw new Error("Failed to fetch repository list of users");
  }

  const data = (await res.json()) as FetchResponseGetGitHubUserRepos_Type;

  return data;
}

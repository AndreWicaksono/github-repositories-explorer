import { useState } from "react";

import type { IGitHubUserItems } from "../../types";

import SearchBar from "./SearchBar/SearchBar";
import UserList from "./UserList/UserList";

import { GitHubRepositoriesExplorerBase } from "./GitHubRepositoriesExplorer.css";
import { fetchSearchGitHubRepositoriesByUsername } from "../../api/fetchGitHubUsers";

const GitHubRepositoriesExplorer = () => {
  const [fetchResult, setFetchResult] = useState<{
    data: IGitHubUserItems[];
    error: string | null;
    isLoading: boolean;
    keyword: string;
  }>({ data: [], error: null, isLoading: false, keyword: "" });

  const handleSearch = async (username: string) => {
    setFetchResult((prevState) => ({
      ...prevState,
      error: null,
      isLoading: true,
      keyword: username,
    }));

    try {
      const res = await fetchSearchGitHubRepositoriesByUsername(username);

      // if (!res.ok) throw new Error("Failed to fetch users");

      // const data = await res.json();

      setFetchResult((prevState) => ({
        ...prevState,
        data: res.items,
        error: null,
        isLoading: false,
      }));
    } catch (err) {
      setFetchResult((prevState) => ({
        ...prevState,
        error: (err as Error).message,
      }));
    } finally {
      setFetchResult((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }
  };

  return (
    <GitHubRepositoriesExplorerBase>
      <SearchBar onSearch={handleSearch} />

      <UserList
        error={fetchResult.error}
        keyword={fetchResult.keyword}
        loading={fetchResult.isLoading}
        users={fetchResult.data}
      />
    </GitHubRepositoriesExplorerBase>
  );
};

export default GitHubRepositoriesExplorer;

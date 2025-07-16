import { describe, it, expect, vi, beforeEach } from "vitest";

import {
  fetchSearchGitHubRepositoriesByUsername,
  fetchGitHubUserRepos,
} from "../../src/api/fetchGitHubUsers";

import type {
  FetchResponseGetGitHubUserRepos_Type,
  IFetchResponseGetGitHubUsers,
} from "../../src/types";

// The mock response should match the data structure
const mockGithubResponse: IFetchResponseGetGitHubUsers = {
  total_count: 2,
  incomplete_results: false,
  items: [
    {
      login: "testuser1",
      id: 123,
      node_id: "abc123",
      avatar_url: "https://avatars.githubusercontent.com/u/123?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/testuser1",
      html_url: "https://github.com/testuser1",
      followers_url: "...",
      following_url: "...",
      gists_url: "...",
      starred_url: "...",
      subscriptions_url: "...",
      organizations_url: "...",
      repos_url: "...",
      events_url: "...",
      received_events_url: "...",
      type: "User",
      user_view_type: "User",
      site_admin: false,
      score: 1.0,
    },
    {
      login: "testuser2",
      id: 456,
      node_id: "abc456",
      avatar_url: "https://avatars.githubusercontent.com/u/456?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/testuser2",
      html_url: "https://github.com/testuser2",
      followers_url: "...",
      following_url: "...",
      gists_url: "...",
      starred_url: "...",
      subscriptions_url: "...",
      organizations_url: "...",
      repos_url: "...",
      events_url: "...",
      received_events_url: "...",
      type: "User",
      user_view_type: "User",
      site_admin: false,
      score: 1.0,
    },
  ],
};

const mockUserRepos: FetchResponseGetGitHubUserRepos_Type = [
  {
    id: 123456789,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjM0NTY3ODk=",
    name: "example-repo",
    full_name: "testuser/example-repo",
    private: false,
    owner: {
      login: "testuser",
      id: 987654321,
      node_id: "MDQ6VXNlcjk4NzY1NDMyMQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/987654321?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/testuser",
      html_url: "https://github.com/testuser",
      followers_url: "https://api.github.com/users/testuser/followers",
      following_url:
        "https://api.github.com/users/testuser/following{/other_user}",
      gists_url: "https://api.github.com/users/testuser/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/testuser/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/testuser/subscriptions",
      organizations_url: "https://api.github.com/users/testuser/orgs",
      repos_url: "https://api.github.com/users/testuser/repos",
      events_url: "https://api.github.com/users/testuser/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/testuser/received_events",
      type: "User",
      user_view_type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/testuser/example-repo",
    description: "Example repo for testing.",
    fork: false,
    url: "https://api.github.com/repos/testuser/example-repo",
    forks_url: "...",
    keys_url: "...",
    collaborators_url: "...",
    teams_url: "...",
    hooks_url: "...",
    issue_events_url: "...",
    events_url: "...",
    assignees_url: "...",
    branches_url: "...",
    tags_url: "...",
    blobs_url: "...",
    git_tags_url: "...",
    git_refs_url: "...",
    trees_url: "...",
    statuses_url: "...",
    languages_url: "...",
    stargazers_url: "...",
    contributors_url: "...",
    subscribers_url: "...",
    subscription_url: "...",
    commits_url: "...",
    git_commits_url: "...",
    comments_url: "...",
    issue_comment_url: "...",
    contents_url: "...",
    compare_url: "...",
    merges_url: "...",
    archive_url: "...",
    downloads_url: "...",
    issues_url: "...",
    pulls_url: "...",
    milestones_url: "...",
    notifications_url: "...",
    labels_url: "...",
    releases_url: "...",
    deployments_url: "...",
    created_at: "2023-01-01T00:00:00Z",
    updated_at: "2023-01-02T00:00:00Z",
    pushed_at: "2023-01-03T00:00:00Z",
    git_url: "git://github.com/testuser/example-repo.git",
    ssh_url: "git@github.com:testuser/example-repo.git",
    clone_url: "https://github.com/testuser/example-repo.git",
    svn_url: "https://svn.github.com/testuser/example-repo",
    homepage: "",
    size: 100,
    stargazers_count: 50,
    watchers_count: 50,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZW1pdA==",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 2,
    open_issues: 1,
    watchers: 50,
    default_branch: "main",
  },
];

describe("fetchSearchGitHubRepositoriesByUsername", () => {
  beforeEach(() => {
    // 👇 This simulates fetch returning a Response-like object
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockGithubResponse),
      } as Partial<Response>),
    ) as typeof fetch;
  });

  it("returns expected GitHub users data format", async () => {
    const result = await fetchSearchGitHubRepositoriesByUsername("test");

    expect(result).toHaveProperty("total_count", 2);
    expect(result.items[0].login).toBe("testuser1");
    expect(result.items[1].html_url).toBe("https://github.com/testuser2");
  });
});

describe("fetchGitHubUserRepos", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserRepos),
      } as Partial<Response>),
    ) as typeof fetch;
  });

  it("calls GitHub API and returns detailed repo list", async () => {
    const response = await fetchGitHubUserRepos("testuser");

    expect(fetch).toHaveBeenCalledWith(
      "https://api.github.com/users/testuser/repos",
    );
    expect(response).toEqual(mockUserRepos);
    expect(response[0].owner.login).toBe("testuser");
    expect(response[0].license?.name).toBe("MIT License");
    expect(response[0].name).toBe("example-repo");
    expect(response[0].language).toBe("TypeScript");
  });
});

import styled from "styled-components";

import type { IGitHubUserItems } from "../../../types";

import ErrorMessage from "../../UI/ErrorMessage";
import ShimmerBar from "../../UI/ShimmerBar";
import UserItem from "./UserItem/UserItem";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface Props {
  error: string | null;
  loading: boolean;
  keyword: string;
  users: IGitHubUserItems[];
}

export default function UserList({ users, loading, error, keyword }: Props) {
  if (loading)
    return (
      <>
        {/* Provide empty <div /> for better CLS since the text is waiting for data fetching process done */}
        <div style={{ height: 40 }} />

        {Array.from({ length: 5 }).map((_, i) => (
          <ShimmerBar className="mb-3" key={i} />
        ))}
      </>
    );

  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      {users.length > 0 && keyword ? (
        <p className="pb-4">Showing users for "{keyword}"</p>
      ) : null}

      <List>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </List>
    </>
  );
}

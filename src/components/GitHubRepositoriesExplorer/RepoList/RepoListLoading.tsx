import React from "react";

import { Container, ShimmerLine, ShimmerRow } from "./RepoListLoading.css";

interface RepoListLoadingProps {
  lines?: number;
}

const RepoListLoading: React.FC<RepoListLoadingProps> = ({ lines = 2 }) => {
  return (
    <div style={{ padding: "16px 0" }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Container className="p-4 mb-3" key={`repo-list-loading-shimmer-${i}`}>
          <ShimmerRow>
            <ShimmerLine className="mb-2" />

            <ShimmerLine />
          </ShimmerRow>
        </Container>
      ))}
    </div>
  );
};

export default RepoListLoading;

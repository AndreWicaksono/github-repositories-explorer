import React, { useState } from "react";

import { Button, Form, Input } from "./SearchBar.css";

interface Props {
  onSearch: (username: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim()) {
      onSearch(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        className="mb-4"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter username"
        value={value}
      />

      <Button type="submit">Search</Button>
    </Form>
  );
}

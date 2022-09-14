import { useState } from "react";

const usePaginator = () => {
  const [page, setPage] = useState(1);
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  return { page, handleChange };
}

export default usePaginator;
import { Pagination } from "@mui/material";
import Flex from "components/utils/Flex";

interface PaginatorProps {
  pages?: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Paginator = ({ pages, page, onChange }: PaginatorProps) => {
  return (
    <Flex justifyContent="center" sx={{ mt: 3 }}>
      <Pagination color="secondary" count={pages} page={page} onChange={onChange} />
    </Flex>
  );
}

export default Paginator;

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  countChange,
} from "../../store/layoutTemplate/LayoutTemplateSlice";

export default function PaginationRounded() {
  const { getCount, count } = useAppSelector((state) => state.LayoutTemplateState);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(countChange(value));
  };

  return (
    <Stack spacing={3} sx={{ paddingBottom: "30px" }}>
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#5CB85C",
            width: 34,
            height: 42,
          },
          "& .Mui-selected": {
            background: "#5CB85C!important",
            color: "#fff",
          },
        }}
        count={getCount}
        variant="outlined"
        shape="rounded"
        page={count}
        onChange={handleChange}
      />
    </Stack>
  );
}

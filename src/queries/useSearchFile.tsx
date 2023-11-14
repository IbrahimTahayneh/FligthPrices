import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import { getData } from "../utils/httpUtil";

interface SearchFlightParams {
  from: string;
  to: string;
  departDate: Date;
  returnDate: Date;
}
const searchFlight = async ({ queryKey }: any) => {
  const [_key, { from, to, departDate, returnDate }] = queryKey;
  const url = `http://localhost:3000/search?from=${from}&to=${to}&departDate=${dayjs(
    departDate
  ).format("YYMMDD")}&returnDate=${dayjs(returnDate).format("YYMMDD")}`;
  const result = await getData(url);

  return result;
};

export const useSearchFlight = ({
  from,
  to,
  departDate,
  returnDate,
}: SearchFlightParams) => {
  const result = useQuery({
    queryKey: ["searchFlight", { from, to, departDate, returnDate }],
    queryFn: searchFlight,
  });

  return result;
};

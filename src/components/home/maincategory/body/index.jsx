import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchparams";
import { useAxios } from "../../../../hooks/useAxios";
import Card from "./card";
import Loading from "./card/loading";

const Body = () => {
  const axios = useAxios();

  const { getParams } = useSearchParams();
  const category = getParams("category") ?? "house-plants";
  const min = getParams("min") ?? 0;
  const max = getParams("max") ?? 1500;
  const sort = getParams("sort") ?? "default-sorting";
  const type = getParams("type") ?? "all-plants";

  const cache_key = `category=${category}&min=${min}&max=${max}&sort=${sort}`;

  const { data, isLoading } = useQuery({
    queryKey: [cache_key],
    queryFn: async () => {
      const { data } = await axios({
        url: `/flower/category/${category}`,
        params: {
          range_min: min,
          range_max: max,
          sort,
          type,
        },
      });
      return data.data;
    },
  });
  console.log(data);

  return (
    <div className="flex flex-wrap gap-3">
      {isLoading
        ? Array.from({ length: 15 }).map((_, idx) => <Loading key={idx} />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};

export default Body;

import { Skeleton } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchparams";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../../../hooks/useAxios";

const Categories = () => {
  const axios = useAxios();
  const { getParams, setParams } = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const { data } = await axios({ url: "/flower/category?" });
      return data.data;
    },
  });

  const selectedcategory = getParams("category") ?? "house-plants";

  const normal_text =
    " w-full flex px-[12px] justify-between cursor-pointer hover:text-[#46A358] items-center";
  const active_text =
    "w-full flex px-[12px] justify-between cursor-pointer text-[#46A358] items-center";

  return (
    <div>
      <h3 className="font-bold">Categories</h3>
      <div className="px-[18px] py-[14px]">
        {isLoading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <Skeleton.Input block active style={{ width: "100%" }} />
            ))
          : data?.map((category) => (
              <div
                key={category.id}
                className={
                  selectedcategory === category.route_path
                    ? active_text
                    : normal_text
                }
                onClick={() => setParams({ category: category.route_path })}
              >
                <h3>{category.title}</h3>
                <h3>({category.count})</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Categories;

import { Select } from "antd";
import React from "react";
import { useSearchParams } from "../../../../../hooks/useSearchparams";

const SortSelector = () => {
  const { setParams, getParams } = useSearchParams();

  const sort = getParams("sort") ?? "default-sorting";
  const options = [
    {
      label: "Default Sorting",
      value: "default-sorting",
    },

    {
      label: "The Cheapest",
      value: "the-cheapest",
    },

    {
      label: "Most Expensive",
      value: "most-expensive",
    },
  ];
  return (
    <div>
      <Select
        value={options?.filter((item) => item.value === sort)}
        onChange={(value) => setParams({ sort: value })}
        style={{ width: 150 }}
        options={options}
      />
    </div>
  );
};

export default SortSelector;

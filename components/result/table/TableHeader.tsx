import { flexRender } from "@tanstack/react-table";
import { useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import { useQueryClient, } from '@tanstack/react-query';

function TableHeader({ header }: { header: any }) {
    
  const sortedUniqueValues = useMemo(
    () => Array.from(header.column.getFacetedUniqueValues().keys()).sort(),
    [header.column]
  );

  const onFilterChange = (value: string) => {
    if (value === "null") {
      header.column.setFilterValue(null);
    } else {
      // 필터링 값 설정
      header.column.setFilterValue(value);
    }  
 
  };

  const sortIcon = header.column.getCanSort() && (
    <div className="flex">
      {header.column.getIsSorted() === "asc" && <FaSortUp className="text-green-500" />}
      {header.column.getIsSorted() === "desc" && <FaSortDown className="text-red-500" />}
      {header.column.getIsSorted() === undefined && <FaSort className="text-gray-500" />}
    </div>
  );

  return (
    <th className="px-6 py-3">
      <div className="flex items-center justify-between">
        <div
          className={`cursor-pointer ${header.column.getCanSort() ? "hover:text-blue-600" : ""}`}
          onClick={header.column.getToggleSortingHandler()}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </div>
        {sortIcon}
      </div>
      {header.column.getCanFilter() ? (
          <select
            className="py-1 px-2 border rounded bg-gray-100 text-gray-600"
            onChange={({ currentTarget: { value } }) => onFilterChange(value as any)}
          >
            <option value="null">선택 안함</option>
            {sortedUniqueValues.map((value: any) => (
              <option key={value}>{value}</option>
            ))}
          </select>
      ) : null}
    </th>
  );
}

export default TableHeader; 



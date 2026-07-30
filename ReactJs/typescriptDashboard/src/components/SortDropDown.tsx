import { IconChevronDown } from "@tabler/icons-react";


const SortDropDown = () => {

    const sortOptions = [
      { value: "recent", label: "Recently Updated" },
      { value: "created", label: "Recently Created" },
      { value: "name", label: "Name (A-Z)" },
      { value: "popular", label: "Most Popular" },
    ];

  return (
    <div className="relative">
      <select
        value={""}
        // onChange={""}
        className="h-10 cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-2 pr-2 text-sm text-gray-700 outline-none "
      >
        <option value="" disabled>
          Sort by
        </option>
        {sortOptions?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <IconChevronDown
        size={18}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
}

export default SortDropDown

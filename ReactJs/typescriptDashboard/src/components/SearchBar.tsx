import { IconSearch } from "@tabler/icons-react";


const SearchBar = () => {
    return (
      <div className="relative w-96 flex ">
        
        <IconSearch
          stroke={1}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search segments, signals, tags..."
          className="h-10 w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#E20074] focus:ring-2 focus:ring-pink-100"
        />
      </div>
    );
}

export default SearchBar

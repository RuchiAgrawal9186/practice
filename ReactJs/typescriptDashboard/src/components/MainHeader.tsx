import { IconMenu2 } from "@tabler/icons-react";

type MainHeaderProps = {
  onMenuClick: () => void;
};

const MainHeader = ({ onMenuClick }: MainHeaderProps) => {
  return (
    <header className=" flex border-b border-gray-200 h-14  bg-white items-center justify-between px-3">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="mr-3 md:hidden">
          <IconMenu2 size={22} />
        </button>

        {/* <h1 className="text-xl font-bold">Dashboard</h1> */}
      </div>
      {/* left section logo and name */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center">
          <span className="text-[30px] font-bold leading-none text-[#E20074]">
            T
          </span>
        </div>
        <h1 className="text-lg font-bold uppercase tracking-wide">
          Audience Intelligence Platform
        </h1>
      </div>

      {/* right section admin and profile */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-[#E20074]">
          Admin
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-700">
          G
        </div>
      </div>
    </header>
  );
};

export default MainHeader;

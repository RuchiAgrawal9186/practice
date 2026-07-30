// import { NavLink } from "react-router-dom";
// import { sidebarMenu } from "../constants/SideBarData";

// const SideBar = () => {
//   return (
//     <div
//     className=" hidden
//     md:flex
//     md:w-20
//     lg:w-60
//     flex-col
//     border-r border-gray-200 bg-white "
//     >
//       <nav className="p-2">
//         <ul className="space-y-1">
//           {sidebarMenu.map((item) => {
//             const Icon = item.icon;

//             return (
//               <li key={item.id}>
//                 <NavLink
//                   to={item?.path}
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 rounded-lg px-2 py-2 transition-all duration-200
//                     ${
//                       isActive
//                         ? "bg-pink-50 text-[#E20074]"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`
//                   }
//                 >
//                   {Icon && <Icon size={18} />}

//                   <span className="text-sm font-medium">{item.title}</span>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SideBar;


import { NavLink } from "react-router-dom";
import { sidebarMenu } from "../constants/SideBarData";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          w-64
          bg-white
          border-r
          border-gray-200
          transform
          transition-transform
          duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0
          md:static
          md:flex
          md:flex-col
          md:w-20
          lg:w-60
        `}
      >
        <nav className="flex-1 p-2 mt-16 md:mt-0">
          <ul className="space-y-1">
            {sidebarMenu.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      rounded-lg
                      px-3
                      py-3
                      transition-all
                      duration-200

                      md:justify-center
                      lg:justify-start

                      ${
                        isActive
                          ? "bg-pink-50 text-[#E20074]"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                      `
                    }
                  >
                    <Icon size={20} />

                    <span className="ml-3  text-sm font-medium lg:block">
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;

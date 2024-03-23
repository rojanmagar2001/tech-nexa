import { MdMenu } from "react-icons/md";

export default function MainHeaderMobile() {
  return (
    <nav className="p-4 flex justify-between items-center lg:hidden">
      <h1>Tech Nexa</h1>
      <button className="w-8 h-8">
        <MdMenu size={24} fill="#121212" />
      </button>
    </nav>
  );
}

import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer z-10  border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white ">
      <div className="container p-10 flex justify-center items-center">
        <p className="text-slate-400 mr-1">Reshma Rajesh</p>
        <LuCopyright />
      </div>
    </footer>
  );
};

export default Footer;
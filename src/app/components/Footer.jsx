import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <footer className="footer z-10  border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white ">
      <div className="container p-10 flex justify-center items-center">
        <p className="text-slate-400 mr-1">Reshma Rajesh</p>
        <LuCopyright />
        <p className="text-slate-400 ml-1">{year}</p>
      </div>
    </footer>
  );
};

export default Footer;
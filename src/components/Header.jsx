import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky flex items-center top-0 h-12 px-8 py-6 w-full bg-white border-b overflow-hidden">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          className="w-8 h-8 hover:scale-125 transform transition duration-300 ease-in-out"
        />
      </Link>
    </header>
  );
}

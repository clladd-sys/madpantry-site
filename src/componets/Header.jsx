import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-green-700">
          Madison Area Food Pantry
        </Link>
        <nav className="space-x-4">
          <Link to="/about">About</Link>
          <Link to="/donate" className="text-green-700 font-semibold">Donate</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

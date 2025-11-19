export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Madison Area Food Pantry</p>
      </div>
    </footer>
  );
}

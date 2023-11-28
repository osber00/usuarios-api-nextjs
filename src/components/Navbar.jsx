import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='bg-slate-700 py-6 px-12 flex justify-between items-center uppercase font-bold'>
      <Link href='/' className='hover:text-violet-700 transition-all'>
        Inicio
      </Link>
      <ul>
        <li>
          <Link href='/info' className='hover:text-violet-700 transition-all'>
            Información
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

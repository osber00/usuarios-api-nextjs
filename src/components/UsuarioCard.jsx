"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const UsuarioCard = ({ usuario }) => {
  const path = usePathname();
  return (
    <li
      key={usuario.id}
      className='flex justify-between items-center bg-slate-400 my-2 py-3 px-4 rounded-md'>
      <div>
        <div className='font-black'>
          {usuario.first_name} {usuario.last_name}
        </div>
        <span className='text-slate-200 block mb-2'>{usuario.email}</span>
        {path.includes("/usuarios") ? (
          <Link
            href='/'
            className='bg-gray-700 py-2 px-4 rounded-md text-xs uppercase hover:bg-violet-700 transition-all'>
            Inicio
          </Link>
        ) : (
          <Link
            href={`/usuarios/${usuario.id}`}
            className='bg-gray-700 py-2 px-4 rounded-md text-xs uppercase hover:bg-violet-700 transition-all'>
            Información
          </Link>
        )}
      </div>
      <img
        src={usuario.avatar}
        alt={usuario.first_name}
        className='rounded-full'
      />
    </li>
  );
};

export default UsuarioCard;

import UsuarioCard from "@/components/UsuarioCard";

const fetchUsuarios = async () => {
  const request = await fetch("https://reqres.in/api/users?page=1");
  const response = await request.json();
  return response.data;
};

export const metadata = {
  title: "Inicio - NextJs",
};

const HomePage = async () => {
  const usuarios = await fetchUsuarios();
  console.log(usuarios);
  return (
    <ul>
      {usuarios.map((usuario) => (
        <UsuarioCard usuario={usuario} key={usuario.id} />
      ))}
    </ul>
  );
};

export default HomePage;

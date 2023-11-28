import UsuarioCard from "@/components/UsuarioCard";

const fetchUsuario = async (userId) => {
  const req = await fetch(`https://reqres.in/api/users/${userId}`);
  const response = await req.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return response.data;
};

const UsuarioPage = async ({ params }) => {
  const usuarioId = params.id;
  const usuario = await fetchUsuario(usuarioId);
  return <UsuarioCard usuario={usuario} />;
};

export default UsuarioPage;

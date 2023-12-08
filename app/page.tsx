import Image from "next/image";
import AddUser from "./components/AddUser";
import ItemUser from "./components/ItemUser";
import { getUsers } from "@/utils/api";

export default async function Home() {
  const usuarios = await getUsers();

  return (
    <div className="w-full h-full flex flex-col p-5 space-y-5">
      <div className="w-full shadow-lg p-10 space-y-5">
        <h1 className="font-bold text-3xl">Crud Simple</h1>
        <AddUser />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario: IUser) => {
                return <ItemUser key={usuario.id} usuario={usuario} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

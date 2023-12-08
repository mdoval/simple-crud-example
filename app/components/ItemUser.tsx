import DeleteUser from "./DeleteUser";
import EditarUser from "./EditUser";

interface ItemUserProps {
  usuario: IUser;
}

const ItemUser: React.FC<ItemUserProps> = ({ usuario }) => {
  return (
    <tr className="hover">
      <td>{usuario.nombre}</td>
      <td>{usuario.email}</td>
      <td>{usuario.edad}</td>
      <td className="flex space-x-2">
        <EditarUser user={usuario} />
        <DeleteUser user={usuario} />
      </td>
    </tr>
  );
};

export default ItemUser;

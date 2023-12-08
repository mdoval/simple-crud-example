"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteUser } from "@/utils/api";

interface DeleteUserProps {
  user: IUser;
}

const DeleteUser: React.FC<DeleteUserProps> = ({ user }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<IUser>(user);

  const handleDelete = async () => {
    console.log("Eliminar Registro");
    await deleteUser(usuario);
    router.refresh();
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-error w-32"
        onClick={() => setModalOpen(true)}
      >
        Eliminar
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <h1 className="font-bold text-lg">Crear Usuario</h1>
        <div>Desea eliminar el usuario {user.nombre} ?</div>
        <div className="text-right">
          <button className="btn btn-primary" onClick={() => handleDelete()}>
            Si
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setModalOpen(true)}
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteUser;

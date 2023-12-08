"use client";

import { ChangeEvent, useState } from "react";
import Modal from "./Modal";
import { editUser } from '@/utils/api'
import { useRouter } from "next/navigation";

interface EditUserProps {
  user: IUser
}

const EditUser: React.FC<EditUserProps> = ({user}) => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [form, setForm] = useState<IUser>(user)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
//    console.log(form)
    await editUser(form)
    router.refresh()
    setModalOpen(false)
  }

  const handleChange = (campo:string, valor: string | number )=> {
    if(typeof valor === "number") {
      if(isNaN(valor)) valor = 0
    } 
    setForm({...form, [campo]: valor})
  };

  return (
    <div>
      <button
        className="btn btn-primary w-32"
        onClick={() => setModalOpen(true)}
      >
        Editar
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <h1 className="font-bold text-lg">Crear Usuario</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Cual es tu nombre?</span>
            </div>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              placeholder="Ingrese tu nombre"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label hidden">
              <span className="label-text-alt">Error de nombre</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Cual es tu correo?</span>
            </div>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              type="text"
              placeholder="Ingresa tu correo"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label hidden">
              <span className="label-text-alt">Error de correo</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Que edad tenes?</span>
            </div>
            <input
              value={form.edad}
              onChange={(e) => handleChange("edad", parseInt(e.target.value))}
              type="number"
              placeholder="Ingresa tu edad"
              className="input input-bordered w-1/2 max-w-xs"
            />
            <div className="label hidden">
              <span className="label-text-alt">Error de edad</span>
            </div>
          </label>
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditUser
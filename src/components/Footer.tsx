import { MailIcon, PhoneIcon } from "lucide-react";

export function Footer() {
  const missao = import.meta.env.VITE_MISSAO;
  const rua = import.meta.env.VITE_ENDERECO_RUA;
  const cidade = import.meta.env.VITE_ENDERECO_CIDADE;
  const estado = import.meta.env.VITE_ENDERECO_ESTADO;
  const telefone = import.meta.env.VITE_TELEFONE;
  const email = import.meta.env.VITE_EMAIL;

  return (
    <footer className="flex md:justify-between max-md:flex-col max-md:gap-8">
      <div className="w-64">
        <p className="font-medium mb-1 md:mb-4">Instituto Zanolli</p>
        <p className="font-light">
          {missao ? (
            <>{missao}</>
          ) : (
            <>
              Promover o desenvolvimento humano e social por meio de iniciativas
              culturais, esportivas e educacionais.
            </>
          )}
        </p>
      </div>
      <div className="w-64">
        <p className="font-medium mb-1 md:mb-4">Endereço</p>
        <p className="font-light">{rua}</p>
        <p className="font-light">
          {cidade}, {estado}
        </p>
      </div>
      <div className="w-64">
        <p className="font-medium mb-1 md:mb-4">Contato</p>
        <p className="font-light flex gap-2 items-center">
          <PhoneIcon size={16} /> Telefone: {telefone}
        </p>
        <p className="font-light flex gap-2 items-center">
          <MailIcon size={16} />
          Email: {email}
        </p>
      </div>
    </footer>
  );
}

export function Header() {
  const imgUrl = import.meta.env.VITE_IMAGE_HEADER_URL;

  const handleScroll = (id: string) => {
    const section = document.getElementById(`${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div>
        <h1 className="text-2xl font-medium flex gap-4 items-center">
          Instituto Zanolli <img src="/assets/Logo.jpg" className="w-16" />
        </h1>
        <div className="flex justify-between items-center">
          <div className="mt-52">
            <h2 className="text-5xl font-semibold">
              Bem Vindo ao Instituto Zanolli
            </h2>
            <button
              className="mt-8 bg-foreground p-2 px-8 rounded-3xl text-secondary font-bold hover:bg-foreground/80"
              onClick={() => handleScroll("sobre-nos")}
            >
              Detalhes
            </button>
          </div>
          <div className="w-[32rem] max-md:h-[21rem] mr-8 absolute right-0 max-md:left-6 top-28 max-md:top-[13rem] -z-50 max-md:w-[19rem] max-md:opacity-50">
            <img
              src={`${imgUrl ? imgUrl : "/assets/ImagemHeader.jpg"}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

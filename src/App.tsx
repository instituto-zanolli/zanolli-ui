import {
  BookOpenIcon,
  HeartPulseIcon,
  PaletteIcon,
  TrophyIcon,
} from "lucide-react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK;

  return (
    <>
      <div className="p-8 md:ml-16">
        <Header />
        <div>
          <div className="mt-64">
            <h2 className="text-3xl font-semibold">Por que devo conhecer?</h2>
          </div>
          <div className="md:flex md:justify-between max-md:mx-8">
            <div className="flex flex-col gap-8 md:gap-16 mt-16 md:w-[36rem]">
              <div className="flex items-center md:gap-2 gap-4 md:-ml-14">
                <HeartPulseIcon size={40} className="w-full" color="#FBFF00" />
                <div>
                  <span className="font-medium flex gap-2">
                    Parcerias para o Bem-Estar Social
                  </span>
                  <p className="font-light">
                    O Instituto Zanolli atua em parceria com a administração
                    pública e organizações da sociedade civil para promover
                    iniciativas de interesse público, como cultura, esporte e
                    socialização. Esse compromisso abrange municípios como
                    Pimenta Bueno e regiões próximas, fortalecendo comunidades
                    por meio de projetos colaborativos e atividades inclusivas.
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-2 gap-4 md:-ml-14">
                <BookOpenIcon size={40} className="w-full" color="#FBFF00" />
                <div>
                  <span className="font-medium">
                    História e Reconhecimento Internacional
                  </span>
                  <p className="font-light">
                    Fundado em 1997 pela artista plástica Luzia Zanolli, o
                    Instituto se destacou em diversas áreas culturais e
                    esportivas, representando Pimenta Bueno e Rondônia em
                    eventos nacionais e internacionais. Obras do acervo
                    institucional foram expostas e vendidas em países como
                    África do Sul, Suíça e Japão, ampliando o reconhecimento da
                    região no cenário global.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:gap-16 mt-16 md:w-[36rem]">
              <div className="flex items-center md:gap-2 gap-4 md:-ml-14">
                <PaletteIcon size={40} className="w-full" color="#FBFF00" />
                <div>
                  <span className="font-medium">
                    Promoção Cultural e Artística
                  </span>
                  <p className="font-light">
                    O Instituto promoveu cursos e eventos musicais e artísticos,
                    como técnicas vocais, workshops de violão e guitarra, além
                    de apresentações teatrais e recitais de poesia. Noites
                    culturais mesclando música e esportes destacaram talentos
                    locais, como a Banda Santo Ofício, fomentando o crescimento
                    artístico e cultural na região.
                  </p>
                </div>
              </div>
              <div className="flex items-center md:gap-2 gap-4 md:-ml-14">
                <TrophyIcon size={40} className="w-full text" color="#FBFF00" />
                <div>
                  <span className="font-medium">
                    Desenvolvimento e Sucesso Esportivo
                  </span>
                  <p className="font-light">
                    No campo esportivo, o Instituto Zanolli formou atletas que
                    alcançaram destaque nacional e internacional, como Luana
                    Hendler e Henrique Nunes, campeões sul-americanos e
                    premiados em competições mundiais. Essas iniciativas não
                    apenas fortaleceram o esporte local, mas também projetaram
                    Rondônia no cenário esportivo global.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-64" id="sobre-nos">
            <h2 className="max-md:text-center text-3xl font-semibold">
              Sobre nós
            </h2>
            <div>
              <p className="max-md:text-center w-[18rem] md:w-[38rem] mt-10 font-light">
                O Instituto Zanolli foi fundado em 05 de Setembro de 1997, pela
                artista Plastica Luzia Zanolli. Ao longo dos anos o Instituto
                Zanolli vem participando de diversas ações no município de
                Pimenta Bueno, no Estado de Rondônia , no Brasil, e enviando
                representantes para o exterior seja em mostras culturais, na
                cultura áudio visual, com exposições de obras de artes ou no
                movimento desportivo, através de sua fundadora a Comendadora
                artista Plastica Luzia Zanolli, Pimenta Bueno foi representada
                com peças teatrais e recital de poesia, varias obras de artes
                que fazem parte do acerso da instituição foram expostas na
                europa, algumas foram vendidas na Africa do sul, Suiça e Japão,
                na musica promoveu cursos de Técnicas Vocais (Israel
                Cavalcante), Violão e Guitarra (Wagner Lima), Workshop de
                Guitarra com o Garoto Tagima Jhonatan Souza, com noites
                culturais promovidas mesclando musica e combates desportivos na
                extinta Apedià em 2002, contribuindo com a promoção da Banda
                Santo Oficio do Professor de História Sérgio Nunes “Canibal”, no
                campo das Artes Marciais o Instituto Zanolli promoveu os
                treinamentos de diversos atletas com destaques nacionais e
                internacionais como os casos de Luana Hendler e Henrique Nunes
                ambos campeões sulamericanos em Montividéo UR, Nunes foi Bronze
                em 2019 em Emeishan China, chamando a atenção de autoridades
                internacionais e de nosso Pais, o mesmo ganhou dois destaques em
                Rondônia o de melhor Kung fuista e melhor atleta no Geral.
              </p>
            </div>
          </div>
          <div className="mt-32 flex max-md:justify-center">
            <a
              className="p-4 px-8 bg-emerald-400 rounded-3xl text-secondary flex gap-2 items-center hover:bg-emerald-400/80 w-max"
              href={whatsappLink}
            >
              Nos chame no Whatsapp
              <img src="/assets/whatsappIcon.svg" alt="" width={18} />
            </a>
          </div>
        </div>
        <div className="mt-64 max-md:mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

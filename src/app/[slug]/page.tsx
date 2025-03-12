import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/teste001.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ pointerEvents: "none" }}
        />
        {/* Máscara para o efeito de degradê e desfoque */}
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 90%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 90%, black 100%)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(2px)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-6">
        {/* LOGO E TITULO */}
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={150}
          height={150}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-200">
          {restaurant.name}
        </h2>
      </div>

      {/* BEM VINDO */}
      <div className="relative z-10 space-y-2 pt-20 text-center">
        <h3 className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-2xl font-semibold text-transparent">
          Seja bem-vindo!
        </h3>
        <p className="text-gray-200 drop-shadow-lg">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* OPÇÕES DE CONSUMO */}
      <div className="h-110 w-110 relative z-10 grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          buttonText="Para comer aqui"
          imageAlt="Comer aqui"
          imageUrl="/dine_in(1).png"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;

/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.restaurant.deleteMany();
    const restaurant = await tx.restaurant.create({
      data: {
        name: "Healthy Food",
        slug: "fsw-donalds",
        description: "Sabor de verdade, feito na hora!",
        avatarImageUrl:
          "https://img.freepik.com/vetores-gratis/frutas-e-legumes-alimentos-saudaveis_24877-51691.jpg?t=st=1741838835~exp=1741842435~hmac=ea810644aeb41d9139339bce31007606e850a6bdf7a2758c44caacfbbb503f52&w=826",
        coverImageUrl:
          "https://img.freepik.com/free-photo/arrangement-tasty-batch-food-cooked-with-copy-space_23-2148765549.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
      },
    });
    const combosCategory = await tx.menuCategory.create({
      data: {
        name: "Dia a Dia",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Salada Saudável com Abacate e Grão-de-Bico",
          description:
            "Uma salada fresca e nutritiva, composta por tomates suculentos, abacate cremoso, grão-de-bico crocante e folhas verdes, temperada com azeite de oliva e ervas finas. Perfeita para uma refeição leve e saudável.",
          price: 39.9,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/salada-saudavel-com-tomate-de-abacate-e-grao-de-bico-isolado-em-fundo-branco_123827-31235.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Tomate",
            "Abacate",
            "Grão-de-bico",
            "Folhas verdes",
            "Azeite de oliva",
            "Ervas finas",
            "Sal e pimenta",
          ],
        },
        {
          name: "Batata Doce Grelhada com Manjericão e Molho de Tomate",
          description:
            "Batata doce grelhada, levemente caramelizada e temperada com manjericão fresco, servida com um molho de tomate azedo e aromático. Uma opção saudável e saborosa, perfeita para uma refeição leve e nutritiva.",
          price: 41.5,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/comida-saudavel-batata-doce-grelhada-com-manjericao-servido-com-molho-de-tomate-azedo-close-up-em-um-fundo-branco-foto-para-o-cardapio_639032-1535.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Batata doce",
            "Manjericão fresco",
            "Molho de tomate azedo",
            "Azeite de oliva",
            "Alho",
            "Sal e pimenta",
          ],
        },
        {
          name: "Caixa de Almoço Deliciosa",
          description:
            "Uma caixa de almoço repleta de comida apetitosa, disposta de forma organizada e atraente sobre um fundo branco. A combinação de cores e texturas dos alimentos cria uma apresentação visualmente agradável e convidativa.",
          price: 39.9,
          imageUrl:
            "https://img.freepik.com/fotos-premium/caixa-de-almoco-com-comida-deliciosa-em-fundo-branco_392895-471459.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_authors_boost",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão tipo forma",
            "Alface",
            "Picles",
            "Mussarela",
            "Peito de Peru",
            "Tomate",
            "Pepino",
            "Castanhas",
          ],
        },
        {
          name: "Saudável Fit",
          description:
            "Um prato colorido e equilibrado, repleto de alimentos saudáveis, incluindo folhas verdes frescas, legumes variados e possivelmente uma fonte de proteína, como frango grelhado ou tofu. A disposição dos ingredientes é cuidadosamente organizada, criando uma apresentação visualmente atraente e apetitosa. O fundo branco destaca as cores vibrantes dos alimentos, transmitindo uma sensação de frescor e vitalidade.",
          price: 36.2,
          imageUrl:
            "https://img.freepik.com/fotos-premium/prato-de-comida-saudavel-com-salada-e-legumes-em-um-fundo-branco_725455-290.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_authors_boost",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Folhas verdes (alface, rúcula ou espinafre)",
            "Tomate cereja",
            "Pepino",
            "Rúcula",
            "Abacate",
            "Grão-de-bico",
            "Limão",
          ],
        },
      ],
    });
    const hamburguersCategory = await tx.menuCategory.create({
      data: {
        name: "Carnes",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Tagliatelle com Frango e Tomate",
          description:
            "Delicioso prato de tagliatelle al dente, acompanhado de suculentos pedaços de frango grelhado, molho de tomate caseiro e ervas frescas. Uma combinação perfeita de sabores para uma refeição reconfortante.",
          ingredients: [
            "Tagliatelle",
            "Frango grelhado",
            "Molho de tomate caseiro",
            "Ervas frescas",
            "Azeite de oliva",
            "Alho",
            "Cebola",
          ],
          price: 39.9,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/macarrao-tagliatelle-com-tomate-e-frango_2829-18003.jpg?ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Bolinhas de Carne com Purê de Batatas",
          description:
            "Deliciosas bolinhas de carne suculentas, acompanhadas de um cremoso purê de batatas. Uma combinação clássica e reconfortante, perfeita para uma refeição caseira e saborosa.",
          ingredients: [
            "Carne moída",
            "Purê de batatas",
            "Cebola",
            "Alho",
            "Farinha de rosca",
            "Ovos",
            "Temperos naturais",
          ],
          price: 41.5,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/bolinhas-de-carne-com-pure-de-batatas-isoladas-em-fundo-branco_123827-34588.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Frango Grelhado com Salada",
          description:
            "Suculento frango grelhado, temperado com ervas e especiarias, servido com uma fresca salada de folhas verdes, tomate e pepino. Uma opção leve e saudável para uma refeição equilibrada.",
          ingredients: [
            "Frango grelhado",
            "Folhas verdes",
            "Tomate",
            "Pepino",
            "Ervas e especiarias",
            "Azeite de oliva",
            "Sal e pimenta",
          ],
          price: 39.9,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/frango-grelhado-com-salada-isolado-em-fundo-branco_123827-35683.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Perna de Porco Guisada com Molho",
          description:
            "Deliciosa perna de porco guisada, cozida lentamente em um molho rico e saboroso, acompanhada de legumes e batatas. Uma refeição reconfortante e cheia de sabor, perfeita para os amantes de pratos tradicionais.",
          ingredients: [
            "Perna de porco",
            "Molho rico (feito com caldo de carne e especiarias)",
            "Batatas",
            "Cenoura",
            "Cebola",
            "Alho",
            "Louro e tomilho",
          ],
          price: 36.2,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/perna-de-porco-guisado-na-sopa-de-molho_1339-4168.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
    const frenchFriesCategory = await tx.menuCategory.create({
      data: {
        name: "Porções",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Salada de Espinafre com Morangos",
          description:
            "Uma porção de salada fresca e colorida, composta por folhas verdes de espinafre e morangos suculentos, dispostos de forma harmoniosa sobre um fundo branco. A combinação de texturas e cores cria uma apresentação visualmente atraente e saudável, ideal para uma refeição leve e nutritiva.",
          ingredients: [],
          price: 10.9,
          imageUrl:
            "https://img.freepik.com/fotos-premium/salada-com-folhas-de-espinafre-e-morango-no-fundo-branco_392895-157701.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_authors_boost",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Salada Vegetal com Queijo de Cabra",
          description:
            "Uma salada fresca e saudável, composta por folhas verdes de alface, tomates cortados, azeitonas pretas e queijo de cabra, dispostos de forma equilibrada sobre um fundo branco. A combinação de cores e texturas cria uma apresentação visualmente atraente e apetitosa, perfeita para uma refeição leve e nutritiva.",
          ingredients: [],
          price: 9.9,
          imageUrl:
            "https://img.freepik.com/fotos-premium/estilo-de-vida-saudavel-salada-de-dieta-vegetal-com-azeitonas-e-queijo-de-cabra-em-fundo-branco_115919-841.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_authors_boost",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Salada de Outono com Maçãs e Nozes",
          description:
            "Uma salada de outono vibrante e saudável, composta por maçãs cortadas, nozes, folhas de rúcula fresca, cebola roxa e gengibre, dispostos de forma harmoniosa sobre um fundo branco. A combinação de sabores doces, crocantes e picantes cria uma experiência gastronômica única e equilibrada, ideal para uma refeição leve e saborosa.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://img.freepik.com/fotos-gratis/salada-de-outono-com-macas-e-nozes-isoladas-no-fundo-branco_123827-25219.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_authors_boost",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
    const drinksCategory = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Coca-cola",
          description: "Coca-cola gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Fanta Laranja",
          description: "Fanta Laranja gelada para acompanhar seu lanche.",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQW7Kxm9gniS9XCLQu7Nb4jvBYZze16goaOqsK",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Água Mineral",
          description: "A bebida favorita do Cristiano Ronaldo.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
    const desertsCategory = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Casquinha de Baunilha",
          description: "Casquinha de sorvete sabor baunilha.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQtfuQrAKkI75oJfPT0crZxvX82ui9qV3hLFdY",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Casquinha de Chocolate",
          description: "Casquinha de sorvete sabor chocolate.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQBH21ijzEVXRoycAtrP9vH45bZ6WDl3QF0a1M",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Casquinha de Mista",
          description: "Casquinha de sorvete sabor baunilha e chocolate.",
          ingredients: [],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ4rBrtULypXmR6JiWuhzS8ALjVkrF3yfatC7E",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });

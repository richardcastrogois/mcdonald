/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.restaurant.deleteMany();
    const restaurant = await tx.restaurant.create({
      data: {
        name: "Fresh Food",
        slug: "fsw-donalds",
        description: "Sabor de verdade, feito na hora!",
        avatarImageUrl:
          "https://img.freepik.com/premium-vector/flat-fresh-food-logo-template-vector-stock-illustration_850624-160.jpg?uid=R145213515&ga=GA1.1.507820623.1737590346&semt=ais_hybrid",
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
          name: "McCrispy Chicken Elite",
          description:
            "Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada, acompanhamento e bebida.",
          price: 39.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQr12aTqPo3SsGjBJCaM7yhxnbDlXeL5N9dckv",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão tipo brioche",
            "Batata",
            "Molho Honey&Fire",
            "Bacon em fatias",
            "Alface",
            "Tomate",
            "Queijo sabor cheddar",
            "Carne 100% de peito de frango",
          ],
        },
        {
          name: "Duplo Cheddar McMelt",
          description:
            "Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim, acompanhamento e bebida.",
          price: 36.2,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQWdq0w8niS9XCLQu7Nb4jvBYZze16goaOqsKR",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão escuro com gergelim",
            "Hambúrguer de carne 100% bovina",
            "Molho lácteo com queijo tipo cheddar",
            "Cebola ao molho shoyu",
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
        name: "Fritas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fritas Grande",
          description: "Batatas fritas crocantes e sequinhas. Vem bastante!",
          ingredients: [],
          price: 10.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQNd3jSNrcJroaszwjUAlM6iSO5ZTx2HV70t31",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Fritas Média",
          description:
            "Batatas fritas crocantes e sequinhas. Vem uma média quantidade!",
          ingredients: [],
          price: 9.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7Y6lv9tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Fritas Pequena",
          description:
            "Batatas fritas crocantes e sequinhas. Vem pouquinho (é bom pra sua dieta)!",
          ingredients: [],
          price: 5.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ5toOZxYa1oARJCUGh4EY3x8NjXHtvZ7lnVfw",
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

const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

prisma.user
    .create({
        data: {
            name: "Bob",
            bio: "profile bit",
            posts: {
                create: [
                    {
                        content: "first post"
                    },
                    {
                        content: "second post"
                    }
                ],
            },
        },
    })
    .then(() => {
        console.log("Inserted user Bob with Posts");
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.post.deleteMany
    ({
        where: {id : 1},
    })
    .then(() => {
        prisma.user
        .delete({
            where: { id: 1},
        })
    })
    .then(() => {
        console.log("Delete User 1 and their posts");
    }).finally(() => {
        prisma.$disconnect();
    })
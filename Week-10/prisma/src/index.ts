import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
   const res = await prisma.user.create({
    data:{
        username:username,
        password:password,
        firstname:firstname,
        lastname:lastname
    }
  })
  console.log(res)
}

interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(username: string, {
    firstname,
    lastname
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {username:username},
    data:{
        firstname,
        lastname
    }
  })
  console.log(res)
}

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where:{username:username}
  })
  console.log(user)
}

// insertUser("admin1", "123456", "Deepak", "A")
// updateUser("admin1", {
//     firstname: "Pranav",
//     lastname: "S"
// })
getUser("admin1")
import prisma from '../lib/prisma';

async function main() {
  // const feed = await prisma.post.findMany({
  //   where: {published: true},
  //   include: {
  //     author: {
  //       select: {name: true}
  //     }
  //   }
  // });
  // return {
  //   props: {feed},
  //   revalidate: 10
  // }
  // ... you will write your Prisma Client queries here
  // await prisma.user.create({
  //   data: {
  //     name: 'alice',
  //     email: 'dsa@df.fd',
  //     posts: {
  //       create: {title: 'hello'},
  //     },
  //     profile: {
  //       create:{ bio: 'i like turtles'}
  //     }
  //   }
  // })
  //
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true
  //   }
  // })
  // console.dir(allUsers, { depth: true});

  // const post = await prisma.post.update({
  //   where: {id: 1},
  //   data: {published: true}
  // })
  // console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
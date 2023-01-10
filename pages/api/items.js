// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  res.status(200).json([
    {
    id: 0,
    title: 'Meguca',
    price: 100,
    image: 'http://localhost:3000/img/madoka-plush.jpg',
    description: 'Lopem Ipsum'
    },
    {
    id: 1,
    title: 'Homura',
    price: 200,
    image: 'http://localhost:3000/img/testimonio-homura-og.jpg',
    description: 'Lopem Ipsum'
    },
    {
    id: 2,
    title: 'QB',
    price: 300,
    image: 'http://localhost:3000/img/kyuubey-plush.jpg',
    description: 'Lopem Ipsum'
    },
    {
    id: 3,
    title: 'Mami',
    price: 1300,
    image: 'http://localhost:3000/img/mami-plush.png',
    description: 'Lopem Ipsum'
    },
    {
    id: 4,
    title: 'kyoko',
    price: 200,
    image: 'http://localhost:3000/img/kyoko-plush.jpg',
    description: 'Lopem Ipsum'
    },
    {
    id: 5,
    title: 'Sayaka',
    price: 50,
    image: 'http://localhost:3000/img/sayaka-plush.png',
    description: 'Lopem Ipsum'
    },
    

  ]);

}

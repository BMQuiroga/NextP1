// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  res.status(200).json([
    {
    id: 0,
    title: 'articulo1',
    price: 100,
    image: 'http://localhost:3000/img/art1.png',
    description: 'Lopem Ipsum'
    },
    {
    id: 1,
    title: 'articulo2',
    price: 200,
    image: 'http://localhost:3000/img/art2.png',
    description: 'Lopem Ipsum'
    },
    {
    id: 2,
    title: 'articulo3',
    price: 300,
    image: 'http://localhost:3000/img/art3.png',
    description: 'Lopem Ipsum'
    },
    {
    id: 3,
    title: 'articulo4',
    price: 1300,
    image: 'http://localhost:3000/img/art4.png',
    description: 'Lopem Ipsum'
    },
    {
    id: 4,
    title: 'articulo5',
    price: 200,
    image: 'http://localhost:3000/img/art5.png',
    description: 'Lopem Ipsum'
    },
    {
    id: 5,
    title: 'articulo6',
    price: 50,
    image: 'http://localhost:3000/img/art6.jpg',
    description: 'Lopem Ipsum'
    },
    

  ]);

}

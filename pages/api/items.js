// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  res.status(200).json([
    {
    id: 0,
    title: 'Figurita Octocat',
    price: 100,
    image: 'http://localhost:3000/img/imagen.webp',
    description: 'Lopem Ipsum'
    },

  ]);

}

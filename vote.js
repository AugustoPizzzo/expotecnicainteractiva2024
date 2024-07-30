export default function handler(req, res) {
    if (req.method === 'POST') {
      const { project_id } = req.body;
  
      // Aquí puedes actualizar los votos del proyecto en tu base de datos
  
      res.status(200).send('Voto registrado con éxito.');
    } else {
      res.status(405).send('Método no permitido.');
    }
  }
  
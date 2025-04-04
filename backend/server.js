import express from 'express';
import cors from 'cors';
import vexor from 'vexor';
import dotenv from 'dotenv';

dotenv.config();
const { Vexor } = vexor;


const vexorInstance = new Vexor({
  publishableKey: process.env.VEXOR_PUBLIC_KEY,
  projectId: process.env.VEXOR_ID_PROYECTO,
  apiKey: process.env.VEXOR_ACCESS_TOKEN_API_KEY,
});

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/create_payment', async (req, res) => {
    const { items } = req.body;
  
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Se requiere al menos un producto para pagar' });
    }
  
    try {
        const paymentResponse = await vexorInstance.pay.mercadopago({
            items,
            options: {
                successRedirect: 'http://localhost:5173/pago-exitoso',
                failureRedirect: 'http://localhost:5173/pago-error',
                pendingRedirect: 'http://localhost:5173/pago-pendiente',
              }
          });
          
  
      res.status(200).json({ payment_url: paymentResponse.payment_url });
    } catch (error) {
      console.error('Error al crear el pago:', error);
      res.status(500).json({ error: error.message });
    }
  });
  


//inicializamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Middleware: Permite receber JSON e falar com o Front-end
app.use(cors());
app.use(express.json());

// Ligar ao Banco de Dados Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ROTA DE TESTE: Verificar se o servidor está online
app.get('/', (req, res) => {
    res.send('Servidor MedConnect está Online! 🚀');
});

// ROTA 1: Ir buscar todos os pacientes (Teste de Banco de Dados)
app.get('/api/pacientes', async (req, res) => {
    try {
        // Vai à tabela 'pacientes' e traz todos os registos
        const { data, error } = await supabase
            .from('pacientes')
            .select('*');

        if (error) throw error;
        
        res.json(data); // Envia os dados para o Front-end
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar pacientes' });
    }
});

// Ligar o Servidor na porta definida
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Servidor a correr na porta http://localhost:${PORT}`);
});

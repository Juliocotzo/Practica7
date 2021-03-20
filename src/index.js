const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express()
const axios = require('axios');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ limit: '5mb', extended: true }));

const apiClient = `http://localhost:3001/api/cliente/pedido`;
const apiRestaurant = `http://localhost:3002/api/restaurante/pedido`;
const apiDelivery = `http://localhost:3003/api/repartidor/pedido`;

// Metodo para solicitar pedido al restaurante
// Se realiza un metodo POST con la informacion del pedido
app.post('/api/cliente/pedido', (req, res) => {
    let body = req.body;
    axios.post(apiClient, body)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que verifica el estdo del pedido al restaurante
// Se realiza un metodo GET y devuelve el estado del pedido
app.get('/api/cliente/pedido/estadoRestaurante', (req, res) => {
    axios.get(`${apiClient}/estadoRestaurante`)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que verifica el estado del pedido al repartidor
// Se realiza un metodo GET y devuelve el estado del pedido
app.get('/api/cliente/pedido/estadoRepartidor', (req, res) => {
    axios.get(`${apiClient}/estadoRepartidor`)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que recibe el pedido del cliente
// Se realiza un metodo POST con el pedido del cliente
app.post('/api/restaurante/pedido', (req, res) => {
    let body = req.body;
    axios.post(apiRestaurant, body)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que informa el estado del pedido al cliente
// Se realiza un metodo GET y develve el estado del pedido
app.get('/api/restaurante/pedido/estadoRestaurante', (req, res) => {
    axios.get(`${apiRestaurant}/estadoRestaurante`)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que avisa  cuando el pedido ya esta listo al repartidor
// Se realiza un metodo GET y devuelve el estado del pedido
app.get('/api/restaurante/pedido/repartidor', (req, res) => {
    axios.get(`${apiRestaurant}/repartidor`)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que permite al repartidor revibir el pedido
// Se realiza un metodo POST y se envia el detalle del pedido del cliente
app.post('/api/repartidor/pedido/recibir', (req, res) => {
    let body = req.body;
    axios.post(`${apiDelivery}/recibir`, body)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que informa el estado del pedido al cliente
// Se realiza un metodo GET y devuelve el estado del pedido
app.get('/api/repartidor/pedido/estado', (req, res) => {
    axios.get(`${apiDelivery}/estado`)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

// Metodo que marca como entregado el pedido al cliente
// Se realiza un metodo POST y devuelve el mensaje de "Pedido entregado" 
app.post('/api/repartidor/pedido/entregado', (req, res) => {
    let body = req.body;
    axios.post(`${apiDelivery}/entregado`, body)
        .then((response) => {
            res.status(200).json(response.data);
        }, (error) => {
            let errorRes = {
                "status": 400,
                "message": error.name
            };
            res.status(400).json(errorRes);
        });
});

app.get('/api/', (req, res) => {
    res.status(200).json('HELLO WORLD');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

module.exports = app;
const supertest  = require("supertest");
const app = require('../src/index');

describe('Api testing - Server Client', () => {
    const pedido =  { id: "1", cliente: "Julio", pedido: "1 hamburguesa"};
    it('POST /api/cliente/pedido', (done) => {
        supertest(app)
        .post('/api/cliente/pedido')
        .send(pedido)
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('GET /api/cliente/pedido/estadoRestaurante', (done) => {
        supertest(app)
        .get('/api/cliente/pedido/estadoRestaurante')
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('GET /api/cliente/pedido/estadoRepartidor', (done) => {
        supertest(app)
        .get('/api/cliente/pedido/estadoRepartidor')
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
})

describe('Api testing - Server Restaurant', () => {
    const pedido =  { id: "1", cliente: "Julio", pedido: "1 hamburguesa"};
    it('POST /api/restaurante/pedido', (done) => {
        supertest(app)
        .post('/api/restaurante/pedido')
        .send(pedido)
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('GET /api/restaurante/pedido/estadoRestaurante', (done) => {
        supertest(app)
        .get('/api/restaurante/pedido/estadoRestaurante')
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('GET /api/restaurante/pedido/repartidor', (done) => {
        supertest(app)
        .get('/api/restaurante/pedido/repartidor')
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
})

describe('Api testing - Server Delivery', () => {
    const pedido =  { id: "1", cliente: "Julio", pedido: "1 hamburguesa"};
    it('POST /api/repartidor/pedido/recibir', (done) => {
        supertest(app)
        .post('/api/repartidor/pedido/recibir')
        .send(pedido)
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('GET /api/repartidor/pedido/estado', (done) => {
        supertest(app)
        .get('/api/repartidor/pedido/estado')
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
    it('POST /api/repartidor/pedido/entregado', (done) => {
        supertest(app)
        .post('/api/repartidor/pedido/entregado')
        .send(pedido)
        .expect(200)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
        })
    })
})
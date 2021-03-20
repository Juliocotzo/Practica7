/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const bodyParser = __webpack_require__(2);
const morgan = __webpack_require__(3);
const cors = __webpack_require__(4);
const app = express()
const axios = __webpack_require__(5);
const { response } = __webpack_require__(0);

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

app.listen(3000, () => {
    console.log('Server on port 3000');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
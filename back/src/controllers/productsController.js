const path = require('path');
const fs = require('fs');
let db = require("../database/models");
const { validationResult } = require('express-validator');
const Op = db.Sequelize.Op;
const Origins = db.Origins;

/*const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); */

const productsController = {

	products: (req, res) => {
		
		db.Products.findAll()
			.then(function (products) {
				res.render('./products/lista_productos', { products })
			})
	},

	detail: (req, res) => {

		db.Products.findByPk(req.params.id)
			.then(product =>
				res.render('./products/producto', { product })
			)
				//CODIGO PARA JSON
				//let idProducto = req.params.id;
				//let product;
				//for (let i=0; i<products.length; i++) {
				//   if (products[i].id == idProducto) {
				//		product = products[i];
	},

	create: (req, res) => {

		Origins.findAll()
		.then(function(origins) {
		res.render('cargar_productos', {origins})			
		})
	},

	store: (req, res) => {

		const resultValidation = validationResult(req);
			if (resultValidation.errors.length > 0) {
				return res.render('./cargar_productos', {
					errors: resultValidation.mapped(),
					oldData: req.body
				})
			};
		db.Products.create({
			name: req.body.name,
			origin_id: req.body.origin_id,
			price: req.body.price,
			description: req.body.description,
			image: req.file.filename
		})
			.then(res.redirect('/products'))
			.catch(error => res.send(error))

	},

	edit: (req, res) => {

		db.Products.findByPk(req.params.id)
			.then(productToEdit =>
				res.render('editar_productos', { productToEdit })
			)
			/* let id = req.params.id;
				globalThis.productToEdit = null;
			    for (let i=0; i<products.length; i++) {
				if (products[i].id == id) {
				productToEdit = products[i];
				} }*/
	},

	update: (req, res) => {

		const id = req.params.id;
		const validation = validationResult(req);
		const { name, price, description } = req.body;

		console.log(validation.errors);
		if(validation.errors.length > 0) {
			return res.redirect(`/products/edit/${id}`);
		} else {
			db.Products.update(
				{
					name,
					price,
					description
				},
				{
					where: {id}
				}
			).then(() => {
				res.redirect('/products')
			}).catch( err => {
				console.log(err);
				res.send(err);
			})
		}
	},
	//CODIGO PARA JSON
	/*let id = productToEdit.id;
	for (let i=0; i<products.length; i++) {
		if (products[i].id == id) {
			products[i].name = req.body.name;
			products[i].price = req.body.price;
			products[i].description = req.body.description;
			//*products[i].features = req.body.features;
			products[i].image = req.file.filename;
		} */
	//fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8'); /*

	destroy: (req, res) => {

		db.Products.destroy({
		where: { id: req.params.id }
		})
		.then(() => {
			return res.redirect('/products')
		})
		.catch(error => res.send(error))
		// let id = req.params.id;
		// console.log(id);
		// products = products.filter(function(product){
		// 	return product.id != id;
		// })
		// fs.writeFileSync(productsFilePath, JSON.stringify(products), 'utf-8')
		// res.redirect('/products')
	},

search: (req, res) => {

	db.Products.findAll({
		where: {
			name: {
				[db.Sequelize.Op.like]: "%" + req.body.search + "%"
			}
		}
	})
	.then(function (products) {
			res.render('./products/lista_productos', { products })
		})

}
}

module.exports = productsController;
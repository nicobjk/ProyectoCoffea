const path = require('path');
const fs = require('fs');
let db = require("../database/models");
const Op = db.Sequelize.Op

const apiController = {

	products: (req, res) => {
		let origins = db.Origins.findAll({include:"products"});
		let products = db.Products.findAll({include:"origin"});

		Promise.all([origins, products])
		.then(function ([origins,products]) {
			const countByCategories = {}
			origins.forEach(element => {
				countByCategories[element.name]=element.products.length
			});
			const productos = products.map(product =>( 
				{ 
					id: product.id,
					name: product.name,
					description: product.description,
					origin: product.origin.name,
					detail: "http://localhost:3000/api/products/" + product.id
				}
			))
			res.json({
				count: products.length,
				countByCategories,
				products: productos
			})
		})
	},

	detail: (req, res) => {
		db.Products.findByPk(req.params.id, {include:"origin"})
		.then(product =>{
			let producto = {
				id: product.id,
				name: product.name,
				origin_id: product.origin_id,
				price: product.price,
				description: product.description,
				origin:product.origin.name,
				image: "http://localhost:3000/images/" + product.image
			}
			res.send(producto)
		}
		
	)
			
	},

	users: (req, res) => {
		db.Users.findAll()
			.then(users => {
				let usuarios =users.map(user => ({
						id: user.id,
						name: user.name,
						email: user.email,
						detail: "http://localhost:3000/api/users/" + user.id
					})
					)
					res.send({
						count: users.length,
						users: usuarios
						})
				
			});
},

	user: (req, res) => {
        db.Users.findByPk(req.params.id)
		.then(user =>{
			let usuario = {
				id: user.id,
				name: user.name,
				email: user.email,
				telefono: user.tel,
				avatar: "http://localhost:3000/images/usersImages/" + user.avatar
			}
			res.send(usuario)
		}
		
	)
	
    }


}

module.exports = apiController;
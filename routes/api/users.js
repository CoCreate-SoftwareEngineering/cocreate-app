const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const user = require("../../models/User");

// @route POST api/users
// @desc Test Route
// @access Public
router.post(
	"/",
	[
		check("firstName", "Name is required").not().isEmpty(),
		check("lastName", "Name is required").not().isEmpty(),
		check("email", "Please Enter a Valid Email").isEmail(),
		check(
			"password",
			"Please Enter a Password With 6 Or More Characters"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req, res);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { firstName, lastName, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "User already exists" }] });
			}

			user = new User({
				firstName,
				lastName,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 3600000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {}
	}
);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlYTAxMzNhYWZlOGI3OTQ3ZjI5ZWE3In0sImlhdCI6MTcwOTgzNDU0OCwiZXhwIjoxNzEzNDM0NTQ4fQ.9NTsYjbtDamuVPNHzhTJv8Szihcq2I6r_RIQuqHfPbA
module.exports = router;

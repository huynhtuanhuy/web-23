const express = require('express');
const bcrypt = require('bcrypt');
const AuthRouter = express.Router();

const userModel = require('../models/users');

// Authentication
// Login
AuthRouter.post('/login', (req, res) => {
    // TODO:
    // - Get username, password from request
    // - Check if user with username exist
    // - Compare password
    // - 
    const { username, password } = req.body;

    if (!username || !password) {
        res.json({ success: 0, message: 'Thiếu username hoặc password!' });
    }

    userModel.findOne({ username })
        .then(userFound => {
            if (!userFound || !userFound._id) {
                res.json({ success: 0, message: 'Không tồn tại người dùng có username này!' });
            } else {
                if (bcrypt.compareSync(password, userFound.password)) {
                    res.json({
                        success: 1,
                        message: 'Đăng nhập thành công!',
                        user: { username }
                    });
                } else {
                    res.json({ success: 0, message: 'Sai mật khẩu!' });
                }
            }
        }).catch(err => {
            res.json({ success: 0, message: 'Đã có lỗi xảy ra!' });
        });
});

module.exports = AuthRouter;
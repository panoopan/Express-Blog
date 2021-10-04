const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const User = db.Users;

const userController = {
  login: async (req, res) => {
    res.render("login");
  },

  handleLogin: async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      req.flash("errMessage", "缺少必要欄位");
      return res.redirect("back");
    }

    try {
      user = await User.findOne({
        where: {
          username,
        },
      });
    } catch (err) {
      req.flash("errMessage", err.toString());
      return res.redirect("back");
    }

    if (!user) {
      req.flash("errMessage", "帳號或密碼錯誤");
      return res.redirect("back");
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        req.flash("errMessage", "帳號或密碼錯誤");
        return res.redirect("back");
      }

      req.session.username = user.username;
      res.redirect("/");
    });
  },

  logout: async (req, res) => {
    req.session.username = null;
    res.redirect("/");
  },

  register: async (req, res) => {
    res.render("register");
  },

  handleRegister: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      req.flash("errMessage", "註冊功能未開放");
      return res.redirect("back");
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        req.flash("errMessage", err.toString());
        return res.redirect("back");
      }

      try {
        user = await User.create({
          username,
          password: hash,
        });
      } catch (err) {
        req.flash("errMessage", "用戶名稱已被註冊");
        return res.redirect("back");
      }

      (req.session.username = user.username), res.redirect("/");
    });
  },

  about: async (req, res) => {
    res.render("about");
  },
};

module.exports = userController;

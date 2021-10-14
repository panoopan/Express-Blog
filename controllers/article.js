const db = require("../models");
const Article = db.Articles;

const articleController = {
  index: async (req, res) => {
    try {
      articles = await Article.findAll({
        where: {
          isDeleted: null,
        },
        order: [["id", "DESC"]],
        limit: 3,
      });
    } catch (err) {
      return console.log(err);
    }

    res.render("index", {
      articles,
      page: null,
      tag: null,
    });
  },

  post: (req, res) => {
    res.render("post");
  },

  handlePost: async (req, res) => {
    const username = req.session.username;
    const { title, content, tag, thumbnail } = req.body;
    if (!title || !content || !tag || !thumbnail) {
      req.flash("errMessage", "缺少必要欄位");
      return res.redirect("back");
    }

    try {
      article = await Article.create({
        title,
        content,
        tag,
        thumbnail,
        username,
      });
    } catch (err) {
      return console.log(err);
    }

    return res.redirect("/");
  },

  blog: async (req, res) => {
    const id = req.query.id;

    try {
      article = await Article.findOne({
        where: {
          id,
          isDeleted: null,
        },
      });
    } catch (err) {
      return console.log(err);
    }

    res.render("blog", {
      article,
    });
  },

  edit: async (req, res) => {
    const id = req.query.id;

    try {
      article = await Article.findOne({
        where: {
          id,
          isDeleted: null,
        },
      });
    } catch (err) {
      return console.log(err);
    }

    res.render("edit", {
      article,
    });
  },

  handleEdit: async (req, res) => {
    const { title, content, tag, thumbnail } = req.body;
    const id = req.query.id;
    const username = req.session.username;

    if (!title || !content || !tag || !thumbnail) {
      req.flash("errMessage", "缺少必要欄位");
      return res.redirect("back");
    }

    if (!id) {
      return res.redirect("back");
    }

    try {
      article = await Article.update(
        { title, content, tag, thumbnail },
        {
          where: {
            id,
            username,
          },
        }
      );
    } catch (err) {
      return console.log(err);
    }

    res.redirect("/");
  },

  admin: async (req, res) => {
    const username = req.session.username;
    if (!username) {
      return res.render("login");
    }

    try {
      articles = await Article.findAll({
        where: {
          username,
          isDeleted: null,
        },
        order: [["id", "DESC"]],
      });
    } catch (err) {
      return console.log(err);
    }

    res.render("admin", {
      articles,
    });
  },

  delete: async (req, res) => {
    const username = req.session.username;
    const id = req.query.id;

    if (!username || !id) {
      return res.redirect("back");
    }

    try {
      article = await Article.update(
        { isDeleted: 1 },
        {
          where: {
            id,
            username,
          },
        }
      );
    } catch (err) {
      return console.log(err);
    }

    res.redirect("back");
  },

  list: async (req, res) => {
    const page = req.query.page;
    const limit = 3;
    const offset = (page - 1) * limit;

    try {
      result = await Article.findAndCountAll({
        where: {
          isDeleted: null,
        },
        order: [["id", "DESC"]],
        limit,
        offset,
      });
    } catch (err) {
      return console.log(err);
    }

    const count = result.count;
    const totalPage = Math.ceil(count / limit);
    const articles = result.rows;

    res.render("index", {
      page,
      count,
      totalPage,
      articles,
      tag: null,
    });
  },

  tag: async (req, res) => {
    const tag = req.query.tag;

    try {
      articles = await Article.findAll({
        where: {
          tag,
          isDeleted: null,
        },
        order: [["id", "DESC"]],
      });
    } catch (err) {
      return console.log(err);
    }

    res.render("index", {
      articles,
      tag,
      page: null,
    });
  },
};

module.exports = articleController;

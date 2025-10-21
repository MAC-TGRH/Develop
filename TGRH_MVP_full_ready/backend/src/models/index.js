const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres', logging: false });

const ContentModel = require('./content');
const Content = ContentModel(sequelize, DataTypes);

sequelize.sync();

module.exports = { sequelize, Content };

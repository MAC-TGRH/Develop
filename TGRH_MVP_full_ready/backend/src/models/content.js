module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    title: { type: DataTypes.STRING, allowNull: false },
    slug:  { type: DataTypes.STRING, allowNull: false, unique: true },
    body:  { type: DataTypes.TEXT, allowNull: false },
    images: { type: DataTypes.JSON, allowNull: true },
    status: { type: DataTypes.ENUM('draft','published'), defaultValue: 'draft' }
  }, { timestamps: true });
  return Content;
};

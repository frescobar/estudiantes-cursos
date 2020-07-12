module.exports = (sequelize, DataTypes) => {
  const Curso = sequelize.define(
    "Curso",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Curso;
};

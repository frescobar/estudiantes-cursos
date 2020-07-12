module.exports = (sequelize, DataTypes) => {
    const Registro = sequelize.define(
        "Registro",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            asistente: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            date: {
                type: DataTypes.DATEONLY
            }
        },
        { timestamps: false }
    );

    return Registro;
};
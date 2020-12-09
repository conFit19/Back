import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";

export class Merchan extends Model {

    public id!: number;
    public product!: string;
    public price!: number;
    public image!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Merchan.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        product: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        price: {
            type: new DataTypes.NUMBER,
            allowNull: false
        },
        image:{
            type: new DataTypes.STRING(128),
            allowNull:false
        },
        createdAt: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: "merchans",
        sequelize: database
    }
);
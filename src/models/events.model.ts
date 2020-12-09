import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";

export class Users extends Model {

    public id!: number;
    public name!: string;
    public description!: string;
    public place!: string;
    public capacity!: number;
    public time!: string;
    public duration!:  string;
    public type!: string;
    public day!: Date;
    public organizer!: string;
    public age!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        description: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        place:{
            type: new DataTypes.STRING(128),
            allowNull:false
        },
        capacity: {
            type: new DataTypes.NUMBER,
            allowNull: false
        },
        time: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        duration:{
            type: new DataTypes.STRING(128),
            allowNull:false
        },
        type:{
            type: new DataTypes.STRING(128),
            allowNull:false
        },
        day:{
            type: new DataTypes.DATE,
            allowNull:false
        },
        organizer: {
            type: new DataTypes.STRING(128),
            allowNull:false
        },
        age: {
            type: new DataTypes.NUMBER,
            allowNull: false
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
        tableName: "events",
        sequelize: database
    }
);
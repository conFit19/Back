import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";
import { Events } from './events.model';

export class Users extends Model {

    public id!: number;
    public name!: string;
    public familyName!: string;
    public bornDate!: Date;
    public email!: string;
    public password!: string;
    public rol!:  string;
    public phone!: number;
    public city!: string;
    public profilePicture!: string;
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
        familyName: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        bornDate:{
            type: new DataTypes.DATE,
            allowNull:false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
            unique:true
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        phone:{
            type: new DataTypes.NUMBER,
            allowNull:false
        },
        rol:{
            type: new DataTypes.STRING(128),
            allowNull:false
        },
        city: {
            type: new DataTypes.STRING(128),
          },
        profilePicture: {
            type: new DataTypes.STRING(128),
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
        tableName: "users",
        sequelize: database
    }
);

Events.belongsTo(Users);
Users.hasMany(Events);
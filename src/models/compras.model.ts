import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';
import {Merchan } from './merchan.model';
import { Users } from './user.model';

export class Compra extends Model {
    public id!: number;
    public UserId!: number;
    public MerchanId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Compra.init({ 
id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Users,
        key: 'id',
      },
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL',
},
MerchanId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Merchan,
        key: 'id',
      },
      onUpdate: 'SET NULL',
      onDelete: 'SET NULL',
},
createdAt :{
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
},
updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
}
},{
tableName: 'compras',
sequelize: database // Es donde decimos como conectanros a la base de datos

})

Compra.belongsTo(Users);
Compra.belongsTo(Merchan);

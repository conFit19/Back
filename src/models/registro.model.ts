import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';
import { Events } from './events.model';
import { Users } from './user.model';

export class Registro extends Model {
    public id!: number;
    public UserId!: number;
    public EventId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Registro.init({ 
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
EventId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Events,
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
tableName: 'registros',
sequelize: database // Es donde decimos como conectanros a la base de datos

})

Registro.belongsTo(Users);
Registro.belongsTo(Events);

 
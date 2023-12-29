import { DataTypes } from 'sequelize'

import { sequelize } from '../database/config'

export const Message = sequelize.define('Message', {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

console.log(Message === sequelize.models.Message)

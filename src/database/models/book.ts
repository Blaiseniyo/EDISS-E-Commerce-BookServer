import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import connection from "../connection";



class Book extends Model<InferAttributes<Book>, InferCreationAttributes<Book>> {
  declare ISBN: string;
  declare title: string;
  declare Author: string;
  declare description: string;
  declare genre: string;
  declare price: number;
  declare quantity: number;

  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Book.init(
  {
    ISBN: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Author: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    genre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    modelName: "Book",
    tableName: "Books",
  }
);


export default Book;

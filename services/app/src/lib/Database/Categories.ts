import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize/types";
import sequelize from ".";
import { Icons } from "./Icons";

export class Categories extends Model<
  InferAttributes<Categories>,
  InferCreationAttributes<Categories>
> {
  declare id: string | undefined;
  declare iconId: number;
  declare name: string;
}

Categories.init(
  {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    iconId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },


  },
  {
    tableName: "categories",
    sequelize, // passing the `sequelize` instance is required
    freezeTableName: true,
    timestamps: false,
  }
);

Categories.belongsTo(Icons, { foreignKey: "icon_id" });

export type CategoriesType = {
  id?: string;
  iconId?: number;
  name?: string;
};

import { body, query } from "express-validator";
import { TUserKeyType, UserKeyType } from "./types";

const schemeUser = {
  getAllUsers: [
    query("page").optional().isInt().withMessage("Invalid page value"),
    query("limit").optional().isInt().withMessage("Invalid limit value"),
    query("sortBy")
      .optional()
      .custom((value) => {
        if (!Object.values(TUserKeyType).includes(value)) {
          throw new Error("Invalid sortBy value");
        }
        return true;
      }),
    query("sortDirection")
      .optional()
      .isIn(["ascending", "descending"])
      .withMessage(
        "Invalid sortDirection value must be 'ascending' or 'descending'"
      ),
    query("match")
      .optional()
      .custom((value) => {
        const validKeys = Object.keys(value) as UserKeyType[];
        const invalidKeys = validKeys.filter(
          (key) => !Object.values(TUserKeyType).includes(key)
        );
        if (invalidKeys.length > 0) {
          throw new Error(`Invalid match keys: ${invalidKeys.join(", ")}`);
        }
        return true;
      }),
  ],
  createUser: [
    body("wallet_id").isUUID(4).withMessage("Invalid page value"),
    body("email").isEmail().withMessage("Invalid email value"),
    body("name").isString().withMessage("Invalid name value"),
    body("last_name").isString().withMessage("Invalid last_name value"),
    body("sex_type")
      .isIn(["male", "female"])
      .withMessage("Invalid sex_type value must be 'male' or 'female'"),
    body("dni")
      .isString()
      .withMessage("Invalid dni value must be a numeric string")
      .matches(/^\d+$/)
      .withMessage("Invalid dni value must be a numeric string"),
    body("birth_date")
      .isISO8601()
      .withMessage("Invalid dni value must be a date valid"),
  ],
};

export default schemeUser;

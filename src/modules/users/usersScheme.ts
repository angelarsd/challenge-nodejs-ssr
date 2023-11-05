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
    body("wallet_id")
      .isUUID(4)
      .withMessage("The wallet_id field must be a valid UUID"),
    body("email")
      .isEmail()
      .withMessage("The email field must be a valid email address"),
    body("name").isString().withMessage("The name field must be a string"),
    body("last_name")
      .isString()
      .withMessage("The last_name field must be a string"),
    body("sex_type")
      .isIn(["male", "female"])
      .withMessage("The sex_type field must be 'male' or 'female'"),
    body("dni")
      .isString()
      .withMessage("The dni field must be a numeric string")
      .matches(/^\d+$/)
      .withMessage("The dni field must be a numeric string"),
    body("birth_date")
      .isISO8601()
      .withMessage("The birth_date field must be a date valid"),
  ],
};

export default schemeUser;

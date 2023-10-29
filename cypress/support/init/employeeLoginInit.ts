import { ICreateEmployeeAPIPayload } from "../loginAccountAPI/Payload/employeeLoginAccountPayload";
import { ICreateLoginDetailsAPIPayload } from "../loginAccountAPI/Payload/loginDetailsPayload";
import genericMethods from "../Helpers/genericFunctions";

export default class userInit {
  static initUser(): ICreateEmployeeAPIPayload {
    return {
      firstName: `luna${genericMethods.generateRandomID()}`,
      middleName: `M${genericMethods.generateRandomID()}`,
      lastName: `l${genericMethods.generateRandomID()}`,
      empPicture: null,
      employeeId: `${genericMethods.generateRandomID()}I`,
    };
  }

/*
  static initUserLoginDetails(): ICreateLoginDetailsAPIPayload {
    return {
      empNumber: `${genericMethods.generateRandomID()}`,
      password: `${genericMethods.generateRandomID()}Zz/`,
      status: true,
      userRoleId: `${genericMethods.generateRandomID()}`,
      username: `miro${genericMethods.generateRandomID()}`,
    };
  }
*/

}

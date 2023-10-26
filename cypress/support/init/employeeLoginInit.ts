import { ICreateEmployeeAPIPayload } from "../loginAccountAPI/Payload/employeeLoginAccountPayload";
import { ICreateLoginDetailsAPIPayload } from "../loginAccountAPI/Payload/loginDetailsPayload";
import genericMethods from "../Helpers/genericFunctions";

export default class userInit {
  static initUser(): ICreateEmployeeAPIPayload {
    return {
      firstName: `zahra${genericMethods.generateRandomID()}`,
      middleName: `M${genericMethods.generateRandomID()}`,
      lastName: `Aqel${genericMethods.generateRandomID()}`,
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

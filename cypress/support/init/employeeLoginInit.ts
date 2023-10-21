import { ICreateEmployeeAPIPayload } from "../loginAccountAPI/Payload/employeeLoginAccountPayload";
import genericMethods from "../Helpers/genericFunctions";

export default class userInit {

  static initUser(): ICreateEmployeeAPIPayload{
    
      return {
        firstName: `zahra${genericMethods.generateRandomID()}`,
        middleName: `M${genericMethods.generateRandomID()}`,
        lastName: `Aqel${genericMethods.generateRandomID()}`,
        empPicture: null,
        employeeId: `${genericMethods.generateRandomID()}`,
      }
    };  
};


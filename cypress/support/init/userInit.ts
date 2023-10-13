import { ICreateEmployeePayload } from "../API/Payload/UserAPIPayload";
import id from "../Helpers/genericFunctions"
export default class userInit {

  static initUser(): ICreateEmployeePayload{
    let createUserPayload: ICreateEmployeePayload = {
    user: {
      email: `zahra${id.randomFunctionNewID()}@test.com`,
      password: "1234567",
      username: `zahra${id.randomFunctionNewID()}`,
    }
  }
    return createUserPayload;
  }
};


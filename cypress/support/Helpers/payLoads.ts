import id from "./genericFunctions";

class payloads {
  static signUpFunc() {
    var signUpPayload: any = {
      user: {
        userName: `zahra${id.randomFunctionNewID()}`,
        email: `zahra${id.randomFunctionNewID()}@test.com`,
        password: "1234567",
      },
    };
    return signUpPayload;
  }
}
export default payloads;

import apiFunctions from "../../support/Helpers/apiFunctions";
import payloads from "../../support/Helpers/payLoads";

describe("Conduit1: SignUp Account", () => {
  it("C1: Login - Create new account", () => {
    apiFunctions.signUpApiConduitUser(payloads.signUpFunc());
  });
});

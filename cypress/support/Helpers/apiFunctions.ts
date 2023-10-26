const baseUrl = Cypress.config().baseUrl;

export const URL = {
  usersUrl: `${baseUrl}/api/users`,
};

export default class apiFunctions {
  static signUpApiConduitUser(payload: string) {
    return cy
      .api({
        method: "POST",
        url: URL.usersUrl,
        body: payload,
        failOnStatusCode: false,
      })
      .then((response) => {
        expect(response.status).to.equal(201);
      });
  }
}

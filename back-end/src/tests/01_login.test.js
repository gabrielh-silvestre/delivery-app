const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");

const server = require("../api/app");

const { User } = require("../database/models"); // importar USER

chai.use(chaiHttp);

const { expect } = chai;

describe("Rota user/login", () => {
  let modelStub;
  let chaiHttpResponse;

  before(() => {
    modelStub = sinon.stub(User, "findOne");

    modelStub.onFirstCall().resolves({
      id: 3,
      name: "Cliente Zé Birita",
      email: "zebirita@email.com",
      password: "1c37466c159755ce1fa181bd247cb925",
      role: "customer",
    });

    modelStub.onSecondCall().resolves({
      id: 1,
      name: "Delivery App Admin",
      email: "adm@deliveryapp.com",
      password: "a4c86edecc5aee06eff8fdeda69e0d04",
      role: "administrator",
    });
  });

  after(() => {
    User.findOne.restore();
  });

  it("Essa requisição deve retornar código de status 200 caso os dados sejam VÁLIDOS", async () => {
    chaiHttpResponse = await chai.request(server).post("/user/login").send({
      email: "zebirita@email.com",
      password: "$#zebirita#$",
    });

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it("A requisição POST para /login deve retornar um usuário caso os dados sejam VÁLIDOS", async () => {
    chaiHttpResponse = await chai.request(server).post("/user/login").send({
      email: "adm@deliveryapp.com",
      password: "--adm2@21!!--",
    });

    expect(chaiHttpResponse.body).to.be.an("object");

    expect(chaiHttpResponse.body).to.have.property("token");
    expect(chaiHttpResponse.body).to.have.property("name");
    expect(chaiHttpResponse.body).to.have.property("email");
    expect(chaiHttpResponse.body).to.have.property("role");
  });

  it("Essa requisição deve retornar código de status 401 caso os dados sejam INVÁLIDOS", async () => {
    chaiHttpResponse = await chai.request(server).post("/user/login").send({
      email: "invalid@deliveryapp.com",
      password: "invalid",
    });

    expect(chaiHttpResponse.status).to.be.equal(404);
  });
});

const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");

const server = require("../api/app");

const { User } = require("../database/models"); // importar USER

chai.use(chaiHttp);

const { expect } = chai;

describe("Rota user/register", () => {
  let modelStub;

  before(() => {
    modelStub = sinon.stub(User, "create");

    modelStub.resolves({
      id: 4,
      name: "Cliente Zé Pinguinha",
      email: "zepinguinha@email.com",
      role: "customer",
    });
  });

  after(() => {
    User.create.restore();
  });

  it('Deve criar um novo usuário "customer" com sucesso', async () => {
    const response = await chai.request(server).post("/user/register").send({
      name: "Cliente Zé Pinguinha",
      email: "zepinguinha@email.com",
      password: "$#zepinguinha#$",
    });

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.an("object");

    expect(response.body).to.have.property("token");
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("email");
    expect(response.body).to.have.property("role");

    expect(response.body.role).to.be.equal("customer");
  });

  it("Não deve criar um novo usuário sem email", async () => {
    const response = await chai.request(server).post("/user/register").send({
      name: "Cliente Zé Pinguinha",
      password: "$#zepinguinha#$",
    });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an("object");
    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.equal('"email" is required');
  });

  it("Não deve criar um novo usuário com email inválido", async () => {
    const response = await chai.request(server).post("/user/register").send({
      name: "Cliente Zé Pinguinha",
      email: "zepinguinha@",
      password: "$#zepinguinha#$",
    });

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an("object");
    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.equal('"email" must be a valid email');
  });

  it("Não deve criar um novo usuário sem nome", async () => {
    const response = await chai.request(server).post("/user/register").send({
      email: "zepinguinha@email.com",
      password: "$#zepinguinha#$",
    });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an("object");

    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.equal('"name" is required');
  });

  it("Não deve criar um novo usuário com nome inválido", async () => {
    const response = await chai.request(server).post("/user/register").send({
      name: "Zé",
      email: "zepinguinha@email.com",
      password: "$#zepinguinha#$",
    });

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an("object");

    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.equal(
      '"name" length must be at least 12 characters long'
    );
  });

  it("Não deve criar um novo usuário sem senha", async () => {
    const response = await chai.request(server).post("/user/register").send({
      name: "Cliente Zé Pinguinha",
      email: "zepinguinha@email.com",
    });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an("object");

    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.equal('"password" is required');
  });

  it("Não deve criar um novo usuário com senha inválida", async () => {
    const response = await chai.request(server).post("/user/register").send({
      name: "Cliente Zé Pinguinha",
      email: "zepinguinha@email.com",
      password: "123",
    });

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.an("object");

    expect(response.body).to.have.property("message");
    expect(response.body.message).to.be.equal(
      '"password" length must be at least 6 characters long'
    );
  });
});

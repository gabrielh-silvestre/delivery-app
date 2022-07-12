const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../api/app');

const { User } = require('../database/models'); // importar USER

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /login',() => {
  let chaiHttpResponse;

  before(() => {
    sinon
    .stub(User, 'findOne')
    .resolves({
        id: 1,
        name: "Delivery App Admin",
        email: "adm@deliveryapp.com",
        password: "--adm2@21!!--",
        role: "administrator",
      });
  });

  after(() => {
    User.findOne.restore();
  })

  it('Essa requisição deve retornar código de status 200 caso os dados sejam VÁLIDOS', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/login')
      .send({
        "email": "adm@deliveryapp.com",
        "password": "--adm2@21!!--"
      });

    expect(chaiHttpResponse.status).to.be.equal(200);
  });

  it('A requisição POST para /login deve retornar um usuário caso os dados sejam VÁLIDOS', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/login')
      .send({
        "email": "adm@deliveryapp.com",
        "password": "--adm2@21!!--"
      });

    expect(response.body).to.haveOwnProperty('name');
    expect(response.body).to.haveOwnProperty('email');
    expect(response.body).to.haveOwnProperty('role');
    expect(response.body).to.haveOwnProperty('token');
  });

  it('Essa requisição deve retornar código de status 401 caso os dados sejam INVÁLIDOS', async () => {
    chaiHttpResponse = await chai
      .request(server)
      .post('/login')
      .send({
        "email": "invalid@deliveryapp.com",
        "password": "invalid"
      });

    expect(chaiHttpResponse.status).to.be.equal(401);
  });
});
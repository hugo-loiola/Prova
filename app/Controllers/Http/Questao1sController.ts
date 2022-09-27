/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Questao1sController {
  // Questão 1.1
  ex1({ request }) {
    const dados = request.body();

    let resultado = {};

    if (dados.tipoPessoa == "PF" && dados.cpf == null) {
      return (resultado = {
        tipo: "error",
        mensagem: "CPF não informado",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cpf: "<não informado>",
        },
      });
    } else if (dados.tipoPessoa == "PJ" && dados.cnpj == null) {
      return (resultado = {
        tipo: "error",
        mensagem: "CNPJ não informado",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cnpj: "<não informado>",
        },
      });
    } else if (dados.tipoPessoa == "PJ" && dados.sexo != null) {
      return (resultado = {
        tipo: "error",
        mensagem: "O campo sexo só é permitido para Pessoa Física",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          sexo: dados.sexo,
        },
      });
    } else if (dados.tipoPessoa == "PJ" && dados.cargo != null) {
      return (resultado = {
        tipo: "error",
        mensagem: "O campo cargo só é permitido para Pessoa Física",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cargo: dados.cargo,
        },
      });
    } else if (dados.cpf != null && dados.cnpj != null) {
      return (resultado = {
        tipo: "error",
        mensagem:
          "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa",
        dados: {
          tipoPessoa: dados.tipoPessoa,
          cpnj: dados.cnpj,
          cpf: dados.cpf,
        },
      });
    }
  }
  // Questão 1.2
  ex2({ request }) {
    const tipoPessoa = request.input("tipoPessoa");
    const cpf = request.input("cpf");
    const cnpj = request.input("cnpj");
    const nome = request.input("nome");
    const sexo = request.input("sexo");
    const cargo = request.input("cargo");
    const salario = request.input("salario");
    let novoSalario;

    if (tipoPessoa === "PJ") {
      novoSalario = salario * 1.25;
    } else if (sexo === "M") {
      switch (cargo) {
        case "estagiario":
          novoSalario = salario * 2;
        case "tecnico":
          novoSalario = salario * 1.6;
        case "gerente":
          novoSalario = salario * 1.3;
        case "diretor":
          novoSalario = salario * 1.2;
        case "presidente":
          novoSalario = salario * 1.1;
      }
    } else if (sexo === "F") {
      switch (cargo) {
        case "estagiario":
          novoSalario = salario * 2;
        case "tecnico":
          novoSalario = salario * 1.7;
        case "gerente":
          novoSalario = salario * 1.4;
        case "diretor":
          novoSalario = salario * 1.3;
        case "presidente":
          novoSalario = salario * 1.2;
      }
    }

    const mensagem = {
      nome: nome,
      salario: salario,
      novoSalario: novoSalario.toFixed(2),
    };

    return mensagem;
  }
}

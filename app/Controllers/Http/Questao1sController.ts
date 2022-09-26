/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Questao1sController {
  // Questão 1.1
  ex1({ request }) {
    // Input padrão
    const dados = request.body();
    let mensagem;
    // A)
    if (dados.tipoPessoa === "PF" && dados.cpf === null) {
      mensagem = "CPF não informado";

      // B)
    } else if (dados.tipoPessoa === "PJ" && dados.cnpj === null) {
      mensagem = "CNPJ não informado";

      // C)
    } else if (dados.tipoPessoa === "PJ" && dados.sexo !== null) {
      mensagem = "O campo sexo só é permitido para Pessoa Física";

      // D)
    } else if (dados.tipoPessoa === "PJ" && dados.cargo !== null) {
      mensagem = "O campo cargo só é permitido para Pessoa Física";

      // E)
    } else if (dados.cpf && dados.cnpj !== null) {
      mensagem =
        "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa";
    }

    return { mensagem };
  }

  ex2({ request }) {
    const dados = request.body();
  }
}

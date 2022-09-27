import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "rpgs";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome_personagem", 200).notNullable();
      table.string("nome_jogador", 200).notNullable();
      table.string("raca", 50).notNullable();
      table.string("classe", 50).notNullable();
      table.string("antecedente", 50);
      table.integer("nivel").notNullable();
      table.string("alinhamento", 50).notNullable();
      table.integer("forca");
      table.integer("destreza");
      table.integer("constituicao");
      table.integer("inteligencia");
      table.integer("sabedoria");
      table.integer("carisma");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

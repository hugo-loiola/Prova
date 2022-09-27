import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Rpg extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nomePersonagem: string;

  @column()
  public nomeJogador: string;

  @column()
  public raca: string;

  @column()
  public classe: string;

  @column()
  public antecedente: string;

  @column()
  public nivel: number;

  @column()
  public alinhamento: string;

  @column()
  public forca: number;

  @column()
  public destreza: number;

  @column()
  public constituicao: number;

  @column()
  public inteligencia: number;

  @column()
  public sabedoria: number;

  @column()
  public carisma: number;

  @column()
  public nascimento: Date;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

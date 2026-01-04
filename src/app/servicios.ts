import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class Servicios {
  private sqlite: SQLiteConnection;
  private db!: SQLiteDBConnection;
  private readonly BORRAR_KEY = 'permitirEliminar';
  private readonly CITAS_INICIALES = [
    { frase: 'Conócete a ti mismo y conocerás el universo.', autor: 'Carl Jung' },
    { frase: 'La vida no se trata de encontrarse a uno mismo, sino de crearse.', autor: 'Carl Rogers' },
    { frase: 'Donde hay ello, debo advenir yo.', autor: 'Sigmund Freud' },
    { frase: 'El ser humano está condenado a ser libre.', autor: 'Viktor Frankl' },
    { frase: 'No vemos las cosas como son, las vemos como somos.', autor: 'Anaïs Nin' }
  ];

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB() {
    try {   
      console.log("initDB");
    if (this.db) return;

    this.db = await this.sqlite.createConnection(
      'citas_db',
      false,
      'no-encryption',
      1,
      false
    );
console.log("dbopen");
    await this.db.open();

    await this.db.execute(`
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        frase TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `);
    console.log("createtable");
    await this.insertarCitasIniciales();
      
    } catch (error) {
      console.log("errorapp",error);
    }
 
  }

  private async insertarCitasIniciales() {
    const res = await this.db.query('SELECT COUNT(*) as total FROM citas');
    const total = res.values?.[0]?.total ?? 0;
    if (total == 0) {
      for (const cita of this.CITAS_INICIALES) {
        await this.db.run(
          'INSERT INTO citas (frase, autor) VALUES (?, ?)',
          [cita.frase, cita.autor]
        );
      }
    }
  }

  async obtenerCitas() {
    try{
      const res = await this.db.query('SELECT * FROM citas ORDER BY id DESC');
      return res.values ?? [];
    }catch(ex){
      console.log("error al obtener citas ",ex);
      return [];
    }
  }

  async agregarCita(frase: string, autor: string) {
    try{
      await this.db.run(
        'INSERT INTO citas (frase, autor) VALUES (?, ?)',
        [frase, autor]
      );
    }catch(ex){
      console.log(ex);
    }

  }

  async eliminarCita(id: number) {
    await this.db.run(
      'DELETE FROM citas WHERE id = ?',
      [id]
    );
  }

  async eliminarTodasLasCitas() {
    await this.db.run('DELETE FROM citas');
  }

  async getBorrarCitas(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.BORRAR_KEY });
    return value ? JSON.parse(value) : false;
  }

    async setBorrarCitas(valor: boolean) {
    await Preferences.set({
      key: this.BORRAR_KEY,
      value: JSON.stringify(valor)
    });
  }
}

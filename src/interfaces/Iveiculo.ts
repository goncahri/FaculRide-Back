export interface IVeiculo {
    ID_veiculo?: number;
    Placa_veiculo?: string;
    Cor: string;
    Modelo: string;
    Ano?: Date;
    idUsuario: number; // 🔗 chave estrangeira
  }
  
export interface IAvaliacao {
  ID_Avaliacao?: number;         // ID é opcional porque é gerado automaticamente
  Comentario: string;            // Comentário obrigatório
  Estrelas?: string;             // Estrelas opcionais (valores de "1" a "5")
}

  
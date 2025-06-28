import { Injectable } from '@angular/core';
import { Livro } from './Livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivros {
  livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular',
      resumo:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
      autores: ['Misko Hevery', 'Adam Abrons'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'JavaScript',
      resumo:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      autores: ['Brendan Eich'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Typescript',
      resumo:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      autores: ['Anders Hejlsberg'],
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluirLivro(livro: Livro): void {
    const codigoMaisAlto = Math.max(
      ...this.livros.map((livro) => livro.codigo)
    );
    livro.codigo = codigoMaisAlto + 1;
    this.livros.push(livro);
  }

  excluirLivro(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
  constructor() {}
}

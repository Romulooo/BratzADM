import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BratzDEV';
  conteudo: string = `
    <p>Bem vindo!</p>
  `;

  mostrarConteudo(pagina: string) {
    if (pagina === "inicio") {
      this.conteudo = `
        <h2>Página Inicial</h2>
        <p>Resumo rápido do dia</p>
      `;
    } 
    else if (pagina === "vendas") {
      this.conteudo = `
        <h2>Relatório de Vendas</h2>
        <p>Total de vendas</p>
      `;
    } 
    else if (pagina === "caixas") {
      this.conteudo = `
        <h2>Controle de Caixas</h2>
        <p>Lista de caixas ativos no momento</p>
      `;
    } 
    else if (pagina === "produtos") {
      this.conteudo = `
        <h2>Gerenciamento de Produtos</h2>
        <p></p>
      `;
    } 
    else if (pagina === "alertas") {
      this.conteudo = `
        <h2>Alertas e Notificações</h2>
        <p></p>
      `;
    }  else {
      this.conteudo = `<p>Selecione uma opção.</p>`;
    }
  }
}

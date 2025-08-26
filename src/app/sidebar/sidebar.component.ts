import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() paginaSelecionada = new EventEmitter<string>();

  selecionar(pagina: string) {
    this.paginaSelecionada.emit(pagina);
  }
}

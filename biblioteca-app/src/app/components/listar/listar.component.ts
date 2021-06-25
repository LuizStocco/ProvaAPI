import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  livros!: MatTableDataSource<Livro>;
  displayedColumns: string[] = ['nome', 'isbn', 'preco', 'criadoEm'];

  constructor(private service: LivroService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((livros) => {
      console.log(livros)
      this.livros = new MatTableDataSource<Livro>(livros);
    });
  }
}

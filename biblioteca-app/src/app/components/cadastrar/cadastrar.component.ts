import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/Livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  colunasCredito = ["nome", "valor"];

  nome!: string;
  isbn!: string;
  preco!: string;

  constructor(private service: LivroService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void { 
    // Caso de edição de registro
    // Verificar se existe um id na url
    // Buscar o registro no backend
    // Atribuir para a variável global os valores do objeto que retornou do backend
   }

  cadastrar(): void {
    let livro = new Livro();
    livro.nome = this.nome;
    livro.isbn = this.isbn;
    livro.preco = Number.parseFloat(this.preco);
    this.service.cadastrar(livro).subscribe(livro => {
      console.log(livro);
        this.snack.open("Livro cadastrado com sucesso", "Sucesso", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        }) ;
        this.router.navigate([""]);
    })
  }
}
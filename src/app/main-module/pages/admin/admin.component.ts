import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group(
    {
      password: [
        "",
        [
          Validators.required
        ]
      ]
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (window.localStorage.getItem("auth")) this.router.navigate(["admin-panel/panel"]);
  }

  public fieldNotValid(field: string): boolean | undefined {
    return (this.form.get(field)?.invalid && this.form.get(field)?.touched);
  }

  public authenticate() {
    if (this.form.get("password")?.invalid) {
      this.form.markAllAsTouched();
      return;
    } else if (this.form.get("password")?.value === "admin123456") {
      window.localStorage.setItem("auth", this.form.get("password")?.value!);
      Swal.fire({
        icon: "success",
        text: "Bienvenido",
        showConfirmButton: false,
        timer: 1200
      });
      this.router.navigate(["/admin-panel/panel"]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalido",
        text: "Clave de administrador erronea",
        showConfirmButton: false,
        timer: 1500
      });
      this.form.reset();
    }
  }

}

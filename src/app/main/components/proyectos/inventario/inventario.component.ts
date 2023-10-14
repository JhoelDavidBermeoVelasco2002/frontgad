import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InventarioModel, UpdateProyectoDto } from '../module/inventario';
import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  InventarioForm: FormGroup;
  listadoinventario: InventarioModel[] = []; //poner
  selectInventario:UpdateProyectoDto={}; //
  // listadoestado:EstadoModel[]=[];
  // listadoroles: RolesModel[]=[];

  constructor(private inventarioService: InventarioService, private form: FormBuilder) {
    {
      this.InventarioForm = this.form.group({



        responsable: ['', Validators.required],
        categoria: ['', [Validators.required, Validators.email, this.validarFormatoCorreo]],
        producto: ['', Validators.required],
        marca: ['', Validators.required],
        serial: ['', Validators.required],
        detalle: ['', Validators.required],
        imagen: ['', Validators.required]


      })
    }


  }
  resetForm(form: FormGroup) {
    form.reset();
  }


    ngOnInit(): void {
      this.getInventario();
      // this.getEstado();
      // this.getRoles();


    }



    getInventario() {
      this.inventarioService.getInventario().subscribe(data => {
        this.listadoinventario = data;
        console.log(this.listadoinventario)
      });
    }

    filtrarInventario(filtro: string) {
      // Convierte el valor de búsqueda a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
      const filtroMinusculas = filtro.toLowerCase();

      // Filtra la lista de usuarios según el valor de búsqueda
      const inventarioFiltrados = this.listadoinventario.filter((inventario) => {
        // Compara cada propiedad relevante del usuario con el filtro (puedes agregar más propiedades según tus necesidades)
        return (

          inventario.responsable.toLowerCase().includes(filtroMinusculas) ||
          inventario.categoria.toLowerCase().includes(filtroMinusculas)
          // Agrega más propiedades aquí si es necesario
          // Por ejemplo: usuario.departamento.toLowerCase().includes(filtroMinusculas)
        );
      });

      // Actualiza la lista de usuarios con los resultados del filtro
      // Esto actualizará la tabla en tu plantilla automáticamente
      this.listadoinventario = inventarioFiltrados;
    }


    // getEstado() {
    //   this.usuarioService.getEstado().subscribe(data => {
    //     this.listadoestado = data;
    //     console.log(this.listadoestado)
    //   });
    // }

    // getRoles() {
    //   this.usuarioService.getRoles().subscribe(data => {
    //     this.listadoroles = data;
    //     console.log(this.listadoroles)
    //   });
    // }

    agregarInventario() {
      let inventario: InventarioModel = this.InventarioForm.value;
      this.inventarioService.crearInventario(inventario).subscribe(data => {
        this.getInventario();
        console.log(inventario);

        // Mostrar una alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Inventario creado',
          text: 'El usuario se ha creado correctamente.',
        });
      });
    }


    updateInventario(): void {
      const id = this.selectInventario.id_proyecto ?? 0;

       const data = this.InventarioForm.value;

      this.inventarioService.updateInventario(id, data).subscribe((response) => {
        console.log(response);
        this.getInventario();
        Swal.fire({
          icon: 'success',
          title: 'Usuario se ha actualizado',
          text: 'El usuario se ha creado correctamente.',
        });
      });
    }





    editinventario(lista:InventarioModel){
      console.log('Datos recibidos para editar:', lista);
      this.selectInventario = lista;
      this.InventarioForm.patchValue({
         // id_proyecto: number;
        // responsable: string;
        // categoria: string;
        // producto: string;
        // marca: string;
        // serial: string;
        // detalle: string;
        // imagen: string;
        responsable: lista.responsable,
        categoria: lista.categoria,
        producto: lista.producto,
        marca: lista.marca,
        serial: lista.serial,
        detalle: lista.marca,
        imagen: lista.imagen // Asumiendo que 'estado' es un valor booleano
      });

    }


    eliminarInventario(id_proyecto: number):void {
      Swal.fire({
        title: '¿Está seguro?',
        text: 'No podrá revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.inventarioService.eliminarInventario(id_proyecto).subscribe(data => {
            if (data && data) {
              this.listadoinventario = data;
            }
            this.getInventario();
          })
          Swal.fire(
            'Eliminado',
            'El usuario ha sido eliminado',
            'success'
          )
        }
      }
      )





    }

    getEventValue(event: any): string {
      return event.target.value;
    }

    onInput(event: any) {
      const input = event.target;
      const value = input.value;

      // Remover caracteres no numéricos excepto el símbolo "-"
      const numericValue = value.replace(/[^\d-]/g, '');
      input.value = numericValue;
    }

    onInputletras(event: any) {
      const input = event.target;
      const value = input.value;

      // Remover caracteres no alfabéticos
      const alphabeticValue = value.replace(/[^A-Za-z\s]/g, '');
      input.value = alphabeticValue;
    }

    validarFormatoCorreo(control: FormControl) {
      if (control.touched) { // Verificar si el campo ha sido tocado por el usuario
        const email = control.value;
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;

        if (!pattern.test(email)) {
          return { formatoCorreoInvalido: true };
        }
      }

      return null;
    }



}

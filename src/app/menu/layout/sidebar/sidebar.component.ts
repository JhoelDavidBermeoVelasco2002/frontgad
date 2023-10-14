import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
  @Input() sideNavState: boolean = false;

  list = [
    {
      number: "1",
      name: "Lista de Solicitudes",
      icon: "fa-solid fa-list",
      route: "/solicitudes",
    },
    {
      number: "2",
      name: "Solicitudes Revisadas",
      icon: "fa-solid fa-file-pen",
      route: "/solicitudesrevisadas",
    },
    {
      number: "3",
      name: "Lista Usuarios",
      icon: "fa-regular fa-address-book fa-lg",
      route: "proyectos/inventario",
    },
  ];
  constructor() {}
}

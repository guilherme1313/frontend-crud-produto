import { HeaderService } from './../../components/template/header/header.service';
import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: 'inicio'
    }
  }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'dayGridMonth',
      center: 'title',
      right: 'prev,next today'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };

}

import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { faClock, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css'],
})
export class PresenceComponent implements OnInit {
  faClock = faClock;
  faPen = faPen;

  public students: Array<{
    Nom: string;
    Prenom: string;
    Promo: string;
    Email: string;
  }> = [
    {
      Nom: 'DOE',
      Prenom: 'John',
      Promo: 'B3',
      Email: 'doe.john@campus.academy.com',
    },
    {
      Nom: 'FROUIN',
      Prenom: 'Manon',
      Promo: 'B3',
      Email: 'frouin.manon@campus.academy.com',
    },
    {
      Nom: 'GARNIER',
      Prenom: 'Greg',
      Promo: 'B3',
      Email: 'garnier.greg@campus.academy.com',
    },
    {
      Nom: 'JOURDIN',
      Prenom: 'Julie',
      Promo: 'B3',
      Email: 'jourdin.julie@campus.academy.com',
    },
    {
      Nom: 'MORO',
      Prenom: 'Alex',
      Promo: 'B3',
      Email: 'moro.alex@campus.academy.com',
    },
    {
      Nom: 'NOURI',
      Prenom: 'Charlotte',
      Promo: 'B3',
      Email: 'nouri.charlotte@campus.academy.com',
    },
    {
      Nom: 'NULEAU',
      Prenom: 'Paul',
      Promo: 'B3',
      Email: 'nuleau.paul@campus.academy.com',
    },
    {
      Nom: 'PAUD',
      Prenom: 'Julien',
      Promo: 'B3',
      Email: 'paud.julien@campus.academy.com',
    },
    {
      Nom: 'PILA',
      Prenom: 'Lucie',
      Promo: 'B3',
      Email: 'pila.lucie@campus.academy.com',
    },
    {
      Nom: 'ROY',
      Prenom: 'Martin',
      Promo: 'B3',
      Email: 'roy.martin@campus.academy.com',
    },
    {
      Nom: 'SECHET',
      Prenom: 'Pierre',
      Promo: 'B3',
      Email: 'sechet.pierre@campus.academy.com',
    },
    {
      Nom: 'VITAR',
      Prenom: 'Jule',
      Promo: 'B3',
      Email: 'vitar.jule@campus.academy.com',
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  SelectAll() {
    console.log('ok');
    /* var checkboxes = document.querySelectorAll("input[type=checkbox][id=check]");

    checkboxes.forEach(function(checkbox) {
      checkAll.addEventListener('change', function() {
        if (checkAll.checked) {

        }
      })
    }); */
  }
}

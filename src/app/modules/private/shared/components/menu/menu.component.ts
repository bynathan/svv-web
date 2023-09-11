import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.actualRouter();
  }

  public menuOpen:boolean = false;

  public toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  public option = document.getElementsByClassName('menu__content--option');
  public subOption = document.getElementsByClassName('menu__content--option-sub');

  public optionSelected(optionName:string){
    if(optionName == 'home'){
      document.querySelectorAll('.submenuopen').forEach((i) => {
        i.classList.remove('submenuopen');
      })
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[0].classList.add('selected');
      this.menuOpen = false;
    }
    else if(optionName == 'inspection'){
      document.getElementsByClassName('user')[0].classList.remove('submenuopen');
      this.option[1].classList.toggle('submenuopen');
      this.menuOpen = true;
    }
    else if(optionName == 'subinspectionone'){
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[1].classList.add('selected');
      this.subOption[0].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(optionName == 'subinspectiontwo'){
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[1].classList.add('selected');
      this.subOption[1].classList.add('sub-selected')
      this.menuOpen = false;
    }
    else if(optionName == 'rates'){
      document.querySelectorAll('.submenuopen').forEach((i) => {
        i.classList.remove('submenuopen');
      })
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[2].classList.add('selected');
      this.menuOpen = false;
    }
    else if(optionName == 'metrics'){
      document.querySelectorAll('.submenuopen').forEach((i) => {
        i.classList.remove('submenuopen');
      })
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[3].classList.add('selected');
      this.menuOpen = false;
    }
    else if(optionName == 'user'){
      document.getElementsByClassName('inspection')[0].classList.remove('submenuopen');
      this.option[4].classList.toggle('submenuopen');
      this.menuOpen = true;
    }
    else if(optionName == 'userone'){
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[4].classList.add('selected');
      this.subOption[2].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(optionName == 'usertwo'){
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[4].classList.add('selected');
      this.subOption[3].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(optionName == 'support'){
      document.querySelectorAll('.submenuopen').forEach((i) => {
        i.classList.remove('submenuopen');
      })
      document.querySelectorAll('.menu__content--option').forEach((i) => {
        i.classList.remove('selected')
      });
      this.option[5].classList.add('selected');
      this.menuOpen = false;
    }
  }

  public actualRouter(){
    if(this.router.url == '/app/create-inspection'){
      this.option[1].classList.add('selected');
      this.subOption[0].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(this.router.url == '/app/manage-inspection'){
      this.option[1].classList.add('selected');
      this.subOption[1].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(this.router.url == '/app/register-user'){
      this.option[4].classList.add('selected');
      this.subOption[2].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(this.router.url == '/app/manage-users'){
      this.option[4].classList.add('selected');
      this.subOption[3].classList.add('sub-selected');
      this.menuOpen = false;
    }
    else if(this.router.url == '/app/edit-users'){
      this.option[4].classList.add('selected');
      this.subOption[3].classList.add('sub-selected');
      this.menuOpen = false;
    }
  }
}

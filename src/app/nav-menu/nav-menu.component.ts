import { Component, Input } from '@angular/core';
import { MenuprincipalApiService } from '../services/menuprincipal-api.service'
import { Menuprincipal } from '../models/menuprincipal'
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  @Input() customTitle: string;

  public sw=false

  public menus = []
  public _menu= new Menuprincipal();


  constructor(public menuApi: MenuprincipalApiService) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    
    
  }


  traerporPadre(id) {
    
    //console.log("empezando traida por padre");
    let rs = [];
    for (let prop in this.menus) {
      if (this.menus[prop]["id_menuprincipal"] == id) {
        rs.push(this.menus[prop])
      }
    }
   

    return rs;
  }

  traerporNivel(id) {
    let rs = [];
    for (let prop in this.menus) {
      if (this.menus[prop]["nivel"] == id) {
        rs.push(this.menus[prop])
      }
    }
    

    return rs;
  }



  ngOnInit() {
   
    console.log("el custom tittle es"+ this.customTitle);
    this.menuApi.traertodo().then(succ => {
      console.log(succ);
      console.log("imprimiendo");
      console.log(this.menus);

      for (let prop in succ) {
        let mnu = new Menuprincipal().fromJson(succ[prop])
        this.menus.push(mnu);
      }

      
    }).catch(succ => {
      console.log("error")
      }); 
  }





 


  initialJS(indice) {
    
    console.log(indice);
    if (!this.sw && indice==1) {
      
      console.log("CARGA1")
      $('#' + this.customTitle).children().addClass('active');

      var menu_ul = $('.menu > li > ul'),
        menu_a = $('.menu > li > a'),
        menu_aa = $('.menu > li > ul > li > a'),
        menu_ul_ul = $('.menu > li > ul > li > ul');



      $('.active').next().stop(true, true).slideDown(0);

      menu_a.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
          menu_a.removeClass('active');
          menu_aa.removeClass('active');
          menu_aa.next().stop(true, true).slideUp('normal');

          menu_ul.filter(':visible').slideUp('normal');
          $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
          $(this).removeClass('active');
          $(this).next().stop(true, true).slideUp('normal');
        }
      });

      menu_aa.click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
          menu_aa.removeClass('active');
          menu_ul_ul.filter(':visible').slideUp('normal');
          $(this).addClass('active').next().stop(true, true).slideDown('normal');
        } else {
          $(this).removeClass('active');
          $(this).next().stop(true, true).slideUp('normal');
        }
      });

      
      this.sw = true;
    }

   

   
  }

}

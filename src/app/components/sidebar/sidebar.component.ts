import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuitems: any;

  constructor( public sharedService: SharedService) { }

  getMenu(){
    this.sharedService.getMenuLinks().subscribe(
      (response: any) => {
        this.menuitems = response;
        console.log(this.menuitems)
      }
    );
  }

  ngOnInit(): void {
    this.getMenu();
  }

}

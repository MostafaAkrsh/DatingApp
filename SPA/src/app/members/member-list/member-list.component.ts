import { Observable } from 'rxjs';
import { Member } from './../../_models/member';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_models/Pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 6;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
  this.membersService.getMembers(this.pageNumber,this.pageSize).subscribe(
    response => {
      this.members = response.result;
      this.pagination = response.pagination;
      console.log(response.pagination);
    }
  );  
}

pageChanged(event: any){
  this.pageNumber = event.page;
  this.loadMembers();
}

}

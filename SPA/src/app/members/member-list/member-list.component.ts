import { Observable } from 'rxjs';
import { Member } from './../../_models/member';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_models/Pagination';
import { AccountService } from 'src/app/_services/account.service';
import { UserParams } from 'src/app/_models/userParams';
import { take } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import * as internal from 'stream';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];
  pagination: Pagination;
  userParams:UserParams;
  user:User;
  genderList = [{value: 'male', display:'Males'},{value:'female',display:'Females'},{value:'all',display:'All'}]
  age: number;
  constructor(private membersService: MembersService, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
      this.userParams = new UserParams(user);
    })
   }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
  this.membersService.getMembers(this.userParams).subscribe(
    response => {
      this.members = response.result;
      this.pagination = response.pagination;
      console.log(response.pagination);
    }
  );  
}

resetFilters(){
  this.userParams = new UserParams(this.user);
  this.loadMembers();
}

pageChanged(event: any){
  this.userParams.pageNumber = event.page;
  this.loadMembers();
}

}

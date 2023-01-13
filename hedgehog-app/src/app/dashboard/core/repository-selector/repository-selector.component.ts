import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import { HedgeBackendService } from '../../../services/hedge-backend.service';

@Component({
  selector: 'app-repository-selector',
  providers: [ HedgeBackendService ],
  templateUrl: './repository-selector.component.html',
  styleUrls: ['./repository-selector.component.scss']
})
export class RepositorySelectorComponent implements OnInit {

  projectsList: any[] = [];
  branchList: any[] = [];

  constructor(
    private backSrv: HedgeBackendService
  ) { 
   
  }

  userRepositoryForm: FormGroup = new FormGroup({
    repositoryOwner: new FormControl('', {
      validators: [ 
        Validators.required,
        Validators.minLength(5) 
      ],
      updateOn: 'blur',
    }),
    repositoryProject: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    repositoryBranch: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
  });



  ngOnInit(): void {

    this.userRepositoryForm.get('repositoryOwner')?.valueChanges
      .subscribe((valueChanged: any) => {
        if ( valueChanged.length >= "5" ) {
          this.projectsList = [];
          this.userRepositoryForm.controls.repositoryProject.setErrors({'required': true});
          this.getReposFromOwner(valueChanged);
        }
      }
    );

    this.userRepositoryForm.get('repositoryProject')?.valueChanges
      .subscribe((valueChanged: any) => {
        this.branchList = [];
        this.userRepositoryForm.controls.repositoryBranch.setErrors({'required': true});
        console.log('VALUECHANGED:  ' , valueChanged);
        this.getBranchFromProject(valueChanged);
      }
    );

  }


  getReposFromOwner(owner: String): void {
    this.backSrv._getRepoFromOwner(owner).subscribe((data: any) => {
      if ( data === undefined ) {
        console.log('RARO');
      } else {
        this.projectsList = data;
      }
    });
  }


  getBranchFromProject(repo: String): void {
    let owner: String = this.userRepositoryForm.controls.repositoryOwner.value;
    this.backSrv._getBranchFromRepo(owner, repo).subscribe((data: any) => {
      if (data.length > 0) {
        this.branchList = data;
      }      
    });
  }
  
  getGithubOwner(event: any): void {
    console.log('Focus Out Value='+ event.target.value);
  }

  onSubmit() {
    let repoData = this.userRepositoryForm.value;
    let unique: any =  sessionStorage.getItem('unique');
    this.backSrv._postSaveUserRepo(unique, repoData.repositoryOwner, repoData.repositoryProject, repoData.repositoryBranch )
      .subscribe((data: any) => {
        // TODO DATA 
      })


  }

}

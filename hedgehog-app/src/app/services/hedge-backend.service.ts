import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HedgeBackendService {

  constructor( private http: HttpClient ) { }

  // DEBUG
  // Muestra mensajes de depuración
  DEBUG_NODE = true;

  // API Configuration
  API_HOST = 'http://localhost';
  API_PORT = ':3000';

  // API ENDPOINT
  API_ENDPOINT = this.API_HOST + this.API_PORT;


  _getApiTest() {
    this._debug('getApiTest');
    return this.http.get( this.API_ENDPOINT + '/' );
  }

    
  /**
 * Get All report from GitHub by username
 * https://api.github.com/users/pablomario/repos
 *  http://localhost:3000/repos?owner=pablomario
 * repos
 */
  _getRepoFromOwner( _owner: String ) {
    this._debug('_getRepoFromOwner', arguments );
    let queryParams = '?owner=' + _owner;
    return this.http.get( this.API_ENDPOINT + '/repos' + queryParams);
  }

  /**
 * /repos/{owner}/{repo}/branches'
 * branches
 */
  _getBranchFromRepo(_owner: String, _repo: String) {
    this._debug('_getBranchFromRepo', arguments );
    let queryParams = '?owner=' + _owner + '&repo=' + _repo;
    return this.http.get( this.API_ENDPOINT + '/branches' + queryParams);
  }

  /**
 * /repos/{owner}/{repo}/commits?sha={branchname}
 * commits
 */
  _getCommitsFromBranch(_owner: String, _repo: String, _branchname: String) {
    this._debug('_getCommitsFromBranch', arguments );
    let queryParams = '?owner=' + _owner + '&repo=' + _repo + '&branchname=' +_branchname ;
    return this.http.get( this.API_ENDPOINT + '/commits' + queryParams)
  }

  /**
   * Save user repo
   */
  _postSaveUserRepo( _owner: String, _repositoryOwner: String, _repositoryProject: String, _repositoryBranch: String ) {
    this._debug('_postSaveUserRepo', arguments);
    let body = {
      owner: _owner,
      repositoryOwner: _repositoryOwner,
      repositoryProject: _repositoryProject,
      repositoryBranch: _repositoryBranch
    }
    return this.http.post( this.API_ENDPOINT + '/operations/saverepo', body );
  }

  
  // Miscelanea
  _debug( service: string, data?: any ) {
    if ( this.DEBUG_NODE === true ) { 
      console.log('[Service Invocation - Name= ' + arguments[0] + ' | Invocation Argument[s]= ', ...arguments[1] +']');
     }
  }

}


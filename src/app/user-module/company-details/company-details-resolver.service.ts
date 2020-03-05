import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { of, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsResolverService {

  constructor(private commonService: CommonServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.paramMap.get('compId');

    const compResult = this.commonService.getCompanyById(id);
    if (compResult && compResult.length) { return of(compResult[0]); } else {
      window.alert('Company details not found, please select other company!');
      return EMPTY;
    }
  }
}

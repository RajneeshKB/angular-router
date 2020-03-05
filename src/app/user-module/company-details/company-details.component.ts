import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  compDetails = [{
    name: 'ABC',
    address: 'Gurgaon'
  }, {
    name: 'XYZ',
    address: 'Bangalore'
  }, {
    name: 'PQR',
    address: 'Noida'
  }];

  selectedCompany = {
    name: '',
    address: ''
  };

  constructor(private route: ActivatedRoute, private commonService: CommonServiceService) { }

  ngOnInit() {
    /* // Use below code if resolver service is not being used for prefetching data before activating route
    this.route.paramMap.pipe(
      map((params:ParamMap)=>{
        const selCompName = +params.get('compId');
        return this.commonService.companyList.filter(comp=>{
          if(comp.id === selCompName) return true;
          else return false;
        });
      })
    ).subscribe((res)=>{
      this.selectedCompany = res && res[0] ? res[0] : {}
    }); */

    /* Below code is using resolver to prefetch data and pass a data object while routing */
    this.route.data.subscribe(data => {
      this.selectedCompany = data.compDetail;
    });
  }

}

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBranchDto } from './inputs/add-branch.dto';
import { BranchInterface } from './intefaces/branch.interface';
import { IntegrateBranchDto } from './inputs/integrate-branch.dto';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private readonly http: HttpClient) {}

  addBranch(input: AddBranchDto) {
    return this.http.post<BranchInterface>(`${environment.host}/branch`, input);
  }

  integrateBranch(input: IntegrateBranchDto) {
    return this.http.put<{ affected: number }>(
      `${environment.host}/branch/integrate`,
      input,
    );
  }
}

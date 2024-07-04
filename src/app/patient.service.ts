import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }

  private baseurl="http://localhost:8080/api/su1"

  getPatientList():Observable<Patient[]>{
    return this. httpclient.get<Patient[]>('${this.baseurl}')
  }
}

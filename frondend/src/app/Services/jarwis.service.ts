import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
 private baseUrl = 'http://localhost:8000/api/auth';
  constructor(private http:HttpClient) { }
 login(data: any){
   return  this.http.post(`${this.baseUrl}/login`,data)
 }
 logout(data: any){
  return  this.http.post(`${this.baseUrl}/logout`,data)
}
addlocataire(data: any){
  return  this.http.post(`${this.baseUrl}/addLocP`,data)
 }
addlocatairemor(data: any){
  return  this.http.post(`${this.baseUrl}/addLocM`,data)
 }
 addpropriétaire(data: any){
  return  this.http.post(`${this.baseUrl}/AddProprietaire`,data)
 }
 addsociete(data: any){
  return  this.http.post(`${this.baseUrl}/AddSociete`,data)
 }
 addlocation(data: any){
  return  this.http.post(`${this.baseUrl}/addLocation`,data)
 }
 addcharge(data: any){
  return  this.http.post(`${this.baseUrl}/addCharge`,data)
 }
 addpaiement(data: any){
  return  this.http.post(`${this.baseUrl}/addPaiement`,data)
 }
 addbien(data: any){
  return  this.http.post(`${this.baseUrl}/AddBien`,data)
 }
 getLocPhyActif(){
  return  this.http.get(`${this.baseUrl}/getLocPhyActif`)
 }
 getLocPhyArchiv(){
  return  this.http.get(`${this.baseUrl}/getLocPhyArchive`)
 }
 getProPhyActif(){
  return  this.http.get(`${this.baseUrl}/getProPhyActif`)
 }
 getProPhyArchiv(){
  return  this.http.get(`${this.baseUrl}/getProPhyArchive`)
 }
 getbienActif(){
  return  this.http.get(`${this.baseUrl}/getBienActif`)
 }
 getbienArchiv(){
  return  this.http.get(`${this.baseUrl}/getBienArchive`)
 }
 getlocationActif(){
  return  this.http.get(`${this.baseUrl}/getLocationActif`)
 }
 getlocationArchiv(){
  return  this.http.get(`${this.baseUrl}/getLocationArchive`)
 }
 getchargeActif(){
  return  this.http.get(`${this.baseUrl}/getChargeActif`)
 }
 getchargeArchiv(){
  return  this.http.get(`${this.baseUrl}/getChargeArchive`)
 }

}


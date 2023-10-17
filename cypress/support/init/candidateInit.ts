import { ICreateCandidateAPIPayload } from "../CandidateAPI/Payload/CandidateAPIPayload";
import genericMethods from "../Helpers/genericFunctions";
import id from "../Helpers/genericFunctions"

export default class userInit {

  static initUser(): ICreateCandidateAPIPayload{
    
      return {
        comment:null, 
        consentToKeepData:false, 
        contactNumber:null, 
        dateOfApplication:"2023-6-17", 
        email:`zahra${genericMethods.generateRandomID()}@gmail.com`, 
        firstName:`zahra${genericMethods.generateRandomID()}`, 
        keywords:null, 
        lastName:`aqel${genericMethods.generateRandomID()}`, 
        middleName:null, 
        vacancyId:4, 
      }
    };
  
    static shortlistCandidate():any { 
      let createCandidatePayload = { 
          note: null 
      } 
      return createCandidatePayload 
  }
};


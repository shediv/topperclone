import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/appState';
import { OpenSidenav, CloseSidenav, SetAppTitle } from '../core/layout/layout.actions';

@Component({
  selector: 'amb-home',
  templateUrl: './amb-home.component.html',
  styleUrls: ['./amb-home.component.scss']
})
export class AmbHomeComponent implements OnInit {
  paperData: object;

  constructor(private layoutStore: Store<AppState>) { }

  ngOnInit() {
    this.paperData = {
      "class": "XII",
      "subject": "chemistry",
      "year": 2019,
      "board": "CBSE",
      "marks": 70,
      "time": 3,
      "instrctions" : [
        "All questions are compulsory.",
        "Section A: Questions numbers1to 5are very short answer questions and carry 1mark each.",
        "Section  B:  Questions  numbers6to 12are  short  answer  questions  and  carry 2 marks each.",
        "Section C: Questions numbers 13 to 24 are also short answer questions and carry 3 marks each.",
        "Section  D:  Questions  numbers 25 In 27 are  long  answer  questions  and  carry 5 marks each.",
        "There  is  no  overall  choice.  However,  an  internal  choice  has  been  provided  in  two questions of one mark, two questions of two marks, four questions of three marks and all the three questions of five marks weightage. You have to attempt only one of the choices in such questions.",
        "Use log tablesif necessary. Use of a calculator is not allowed."
      ],
    
      "sections" : [
        {
          "section": "A",
          "questions": [
            {
              "number" : 1,
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Write the IUPAC name of the following compound: .",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_SectioA_1.png",
              },
              "answer": {
                "text": "1-Phenyl butan-2-one",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_SectioA_1.png",
              }
            },
            {
              "number" : 2,
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Why is chloroform kept in dark-coloured bottles?",
                "imagePresent": false
              },
              "answer": {
                "text": "Chloroform in the presence of light and air gets oxidised to phosgene, a poisonous gas. It is carbonyl chloride and represented as COCl2. To prevent the formation of phosgene, chloroform is stored in dark-coloured bottles.This reaction is represented as  CHCl3 + 1/2 O2 →COCl2+HCl",
                "imagePresent": false,
              }
            }
          ]
        }
      ]
    };     
    this.layoutStore.dispatch(new SetAppTitle('CBSE Boeard / Class XII / Science / Chemistry / 2019'));

  }

  open() {
    this.layoutStore.dispatch(new OpenSidenav);
  }

}

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
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Write the IUPAC name of the following compound: .",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_SectioA_1.png"
              },
              "answer": {
                "text": "1-Phenyl butan-2-one",
                "imagePresent": false,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_SectioA_1.png"
              }
            },
            {
              "number" : 2,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Why is chloroform kept in dark-coloured bottles?",
                "imagePresent": false
              },
              "answer": {
                "text": "Chloroform in the presence of light and air gets oxidised to phosgene, a poisonous gas. It is carbonyl chloride and represented as COCl2. To prevent the formation of phosgene, chloroform is stored in dark-coloured bottles.This reaction is represented as  CHCl3 + 1/2 O2 →COCl2+HCl",
                "imagePresent": false
              }
            },
            {
              "number" : 3,
              "hasOrOption": true,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "marks": 1,
              "firstOrQuestion": {
                "question": {
                  "marks": 1,
                  "text": "Write the IUPAC name of the complex 22Co  en   Cl",
                  "imagePresent": false
                },
                "answer": {
                  "text": "Cis-dichlorobis(ethylenediamine)cobalt(III)ion",
                  "imagePresent": false
                }
              },
              "secondOrQuestion": {
                "question": {
                  "marks": 1,
                  "text": "Using IUPAC norms, write the formula of sodium tetrachloridonickelate(II)",
                  "imagePresent": false
                },
                "answer": {
                  "text": "Na2[NiCl4]",
                  "imagePresent": false
                }
              }
            },
            {
              "number" : 4,
              "hasOrOption": true,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "firstOrQuestion": {
                "question": {
                  "marks": 1,
                  "text": "What is the difference between a glycosidic linkage and a peptide linkage?",
                  "imagePresent": false
                },
                "answer": {
                  "text": "A glycosidic bond is a type of covalent bond formed between two monosaccharides of carbohydrate or sugar,whereasa peptide bond is a type of covalent bond formed between two amino acids of proteins.",
                  "imagePresent": false
                }
              },
              "secondOrQuestion": {
                "question": {
                  "marks": 1,
                  "text": "What is the difference between Nucleotide and Nucleoside?",
                  "imagePresent": false
                },
                "answer": {
                  "text": "A nucleotide is composed of a nitrogenous base, sugar and phosphate group,whereas a nucleoside is composed of only a nitrogenous base and a phosphategroup.",
                  "imagePresent": false
                }
              }
            },
            {
              "number" : 5,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Arrange the following in the increasing order of their acidic character: [1]Ethanol, Phenol, Water",
                "imagePresent": false
              },
              "answer": {
                "text": "The increasing order of acidic character:Ethanol < Water < Phenol",
                "imagePresent": false,
              }
            },
            {
              "number" : 6,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Out of 0.1 molal aqueous solution ofglucose and 0.1 molal aqueous solution of KCl, which one will have higher boiling point and why?",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "In the samevolume of water, 0.1 mole of KCl will have greater boiling point elevation,as boiling point elevation is a colligative propertywhich depends on the relative amounts of constituents and not on their identity.Sincemore ions will be produced by KCl(ionic compound) than glucose(covalent compound) as there are more component parts in the KCl molecule, the KCl solution will have a higher boiling point.",
                "imagePresent": false,
                "imageurl": ""
              }
            },
            {
              "number" : 7,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "Predict whether van’t Hoff factor(i) is less than one or greater than one in the following:(i)CH3COOH dissolved in water(ii)CH3COOH dissolved in benzene",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q7_Answer.png"
              }
            },
            {
              "number" : 8,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "What happens when AgCl is doped with CdCl2? What is the name of this defect?",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "CdCl2on addition to AgCl causes cation vacancy. Impurity defect is produced when AgCl is doped with CdCl2.",
                "imagePresent": false,
                "imageurl": ""
              }
            },
            {
              "number" : 9,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 1,
                "text": "What type of defect is shown by NaCl in(a)Stoichiometric defects(b)Non-stoichiometric defects",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "(a)Schottky defect(b)Metal excess defect",
                "imagePresent": false,
                "imageurl": ""
              }
            },
            {
              "number" : 10,
              "class": "XII",
              "subject": "chemistry",
              "year": 2019,
              "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "Complete and balance the following equations:",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q8.png"
              },
              "answer": {
                "text": "(a)Schottky defect(b)Metal excess defect",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q8_Answer.png"
              }
            },
            {
              "number" : 11,
              "class": "XII",
                      "subject": "chemistry",
                      "year": 2019,
                      "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "Write any two oxoacids of sulphur and draw their structures.",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q11_Answer.png"
              }
            },
            {
              "number" : 12,
              "class": "XII",
                      "subject": "chemistry",
                      "year": 2019,
                      "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "Write the name of two fuels other than hydrogen used in a fuel cell. Write two advantages of a fuel cell over an ordinary cell.",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "Carbon monoxide and methane are used as fuelsin a fuel cell.Advantages of fuel cells:(a)Fuel cells have a higher efficiency than diesel or gas engines.(b)The cells were used for electric power generation in the Apollo Space Programme, where water vapour produced in the cellswas condensed and used for drinking purposes.",
                "imagePresent": false,
                "imageurl": ""
              }
            },
            {
              "number" : 13,
              "class": "XII",
                      "subject": "chemistry",
                      "year": 2019,
                      "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "Write the structures of compounds A and B in each of the following reactions:",
                "imagePresent": false,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q13.png"
              },
              "answer": {
                "text": "Carbon monoxide and methane are used as fuelsin a fuel cell.Advantages of fuel cells:(a)Fuel cells have a higher efficiency than diesel or gas engines.(b)The cells were used for electric power generation in the Apollo Space Programme, where water vapour produced in the cellswas condensed and used for drinking purposes.",
                "imagePresent": false,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q13_Answer.png"
              }
            },
            {
              "number" : 14,
              "class": "XII",
                      "subject": "chemistry",
                      "year": 2019,
                      "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "Account for the following:(a)Gabriel phthalimide synthesis is not preferred for preparing aromatic primary amines. (b)On reaction with benzene sulphonyl chloride, the primary amine yields a product soluble in alkali,whereas the secondary amine yields a product insoluble in alkali.",
                "imagePresent": false,
                "imageurl": ""
              },
              "answer": {
                "text": "(a)The method cannot be used for preparing aromatic primary amines because aryl halides do not undergo nucleophilic substitution with the anion formed by pthalimide.(b)(i)Primary amine reacts with benzenesulphonyl chloride to form N-ethylbenzenesulphonyl amide.The hydrogen bonded to nitrogen is strongly acidic due to the presence of a strong electron-withdrawing sulphonyl group and is hence soluble in alkali.(ii)With secondary amine,N,N-diethyl-benzenesulphonamide is formed. N, N-diethylbenzene sulphonamide does not contain any H atom attached to the nitrogen atom,so it is not acidic and is therefore insoluble in alkali.",
                "imagePresent": false,
                "imageurl": ""
              }
            },
            {
              "number" : 15,
              "class": "XII",
                      "subject": "chemistry",
                      "year": 2019,
                      "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "Following reaction takes place in the cell:",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q15.png"
              },
              "answer": {
                "text": "",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q15_Answer.png"
              }
            },
            {
              "number" : 16,
              "class": "XII",
                      "subject": "chemistry",
                      "year": 2019,
                      "board": "CBSE",
              "hasOrOption": false,
              "question":  {
                "marks": 2,
                "text": "",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q16.png"
              },
              "answer": {
                "text": "Kohlrausch law helps us in the determination of limiting molar conductivities for any electrolyte.",
                "imagePresent": true,
                "imageurl": "../assets/images/CBSE_Class12_Science_Chemistry_2019_Q16_Answer.png"
              }
            },           
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

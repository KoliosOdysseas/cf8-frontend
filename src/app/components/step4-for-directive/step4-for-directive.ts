import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
 person: Person[] = 
  [{"firstName":"Rice","lastName":"Heugh","email":"rheugh0@seattletimes.com"},
{"firstName":"Karlotta","lastName":"Kettel","email":"kkettel1@yahoo.com"},
{"firstName":"Rosamund","lastName":"Witcher","email":"rwitcher2@hatena.ne.jp"},
{"firstName":"Estrella","lastName":"Grabham","email":"egrabham3@tumblr.com"},
{"firstName":"Peggi","lastName":"Rizzillo","email":"prizzillo4@mediafire.com"},
{"firstName":"Ingeberg","lastName":"Wesgate","email":"iwesgate5@amazon.co.uk"},
{"firstName":"Dennison","lastName":"Storrar","email":"dstorrar6@rediff.com"},
{"firstName":"Jeniece","lastName":"Tine","email":"jtine7@jiathis.com"},
{"firstName":"Malvina","lastName":"Hews","email":"mhews8@flickr.com"},
{"firstName":"Valerye","lastName":"Krop","email":"vkrop9@tamu.edu"},
{"firstName":"Jacob","lastName":"Wharton","email":"jwhartona@ox.ac.uk"},
{"firstName":"Emmery","lastName":"Eliyahu","email":"eeliyahub@state.gov"},
{"firstName":"Florri","lastName":"Crauford","email":"fcraufordc@photobucket.com"},
{"firstName":"Wilden","lastName":"Brettoner","email":"wbrettonerd@mysql.com"},
{"firstName":"Waldon","lastName":"Lanaway","email":"wlanawaye@examiner.com"},
{"firstName":"Carrie","lastName":"Souch","email":"csouchf@github.io"},
{"firstName":"Glenda","lastName":"Curry","email":"gcurryg@noaa.gov"},
{"firstName":"Alphard","lastName":"McKinty","email":"amckintyh@livejournal.com"},
{"firstName":"Josee","lastName":"Lanchbury","email":"jlanchburyi@unblog.fr"},
{"firstName":"Meagan","lastName":"Sheryn","email":"msherynj@amazon.co.jp"}]
 }

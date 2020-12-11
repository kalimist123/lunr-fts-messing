import { Component, OnInit } from '@angular/core';
import lunr from "lunr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lunrang';

  ngOnInit(): void {

    var documents = [{
      "name": "Lunr",
      "text": "Like Solr, but much smaller, and not as bright javascript."
    }, {
      "name": "React",
      "text": "A JavaScript library for building user interfaces."
    }, {
      "name": "Lodash",
      "text": "A modern JavaScript utility library delivering modularity, performance & extras."
    }]

    var idx = lunr(function () {
      this.ref('name')
      this.field('text')
    
      documents.forEach(function (doc) {
        this.add(doc)
      }, this)
    })
    debugger;
    var results = idx.search("+library +javascript");
    console.log(results);
  }

}

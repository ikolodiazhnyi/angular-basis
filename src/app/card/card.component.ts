import {Component, Input, OnInit} from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls:['./card.component.css'],
    
})
export class CardComponent implements OnInit{
    
    @Input()parrentTitle = ''; 
    lines = ['Lorem ipsum dolor sit amet.', 'Lorem, ipsum dolor.', 'Lorem ipsum dolor sit amet consectetur adipisicing.']
    imgObj = {
        url: 'https://pbs.twimg.com/media/Ep0S6pLUcAMWEHc?format=jpg&name=small',
        width: 300,
    };
    emojies = ['🤟🏾', '🦇' , '🧛', '❣️', '😈', '🍷', '‼️‼️‼️','♥️', '🩸'];
    emojiesUable = false;
    opinion = 'ThAt\'S lIT!!!'
    bolderText = false;
    buttonText = 'Make label bolder';
    date:Date = new Date('December 25, 2020');
    
    //constructor(appComponent:AppComponent){}

    ngOnInit () {
        setTimeout(() => 
            {
                this.imgObj.url = 'https://images.genius.com/78cd0f470a513ff9cdb9726de4e820df.450x600x1.jpg',
                this.imgObj.width = 200
            }, 3000)
    }

    addEmoji(parrentTitle:any) {
        this.emojiesUable = true;
        let randomNum = Math.floor(Math.random() * 9);
        this.parrentTitle = this.emojies[randomNum];
    }
    
    deleteEmoji() {
        this.emojiesUable = false;
    }

    eventHandler(event:any) {
        return event.target.value
    }

    makeFontBolder() {
        this.bolderText = !this.bolderText;
        this.buttonText = this.bolderText  ?  'Make label auto' : 'Make label bolder';
    }
}
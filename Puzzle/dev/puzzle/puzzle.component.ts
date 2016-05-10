/**
 * Created by laurent on 2016-05-08.
 */
import {Component, ContentChildren, OnInit} from 'angular2/core';
@Component(
    {
        selector: "my-puzzle",
        template: `
                    <section class="setup">
                        <h1>Game setup</h1>
                        Enter your name please: <input type="text" #name (keyup)="0" >
                        
                    </section>
                    <section class="game" [hidden]=nameEntered(name.value) #game
                    [class.solved]=checkSolution(s1,s2,s3,s4)>
                        <h2> The game is <span>{{getGameState()}}</span></h2>
                        <p>Ok, {{name.value}}, let's play</p>
                           
                        Switch 1 : <input type="text" #s1 (keyup)="0"/><br/>
                        Switch 2 : <input type="text" #s2 (keyup)="0"/><br/>
                        Switch 3 : <input type="text" #s3 (keyup)="0"/><br/>
                        Switch 4 : <input type="text" #s4 (keyup)="0"/><br/>
                        <p [hidden]=hideSuccess()> Nicely done, {{name.value}}</p>
                    </section>             
                    `
    })
export class PuzzleComponent implements OnInit{

    part1:number;
    part2:number;
    part3:number;
    part4:number;
    state:String ="unsolved";


    ngOnInit():void {
        this.part1=Math.round(Math.random());
        this.part2=Math.round(Math.random());
        this.part3=Math.round(Math.random());
        this.part4=Math.round(Math.random());
        console.log(this.part1 + ' '+ this.part2+' '+this.part3+' '+this.part4);
    }
        nameEntered(name) {
        return (name.length < 3 && name[name.length - 1] != '\n');


    }

    checkSolution(s1, s2, s3, s4) {
        var solved= s1.value == this.part1 &&
            s2.value == this.part2 &&
            s3.value == this.part3 &&
            s4.value == this.part4;
        if(solved) this.state="solved";
        else this.state="unsolved";
        return solved;

    }

    getGameState() {
        return this.state;
    }
    hideSuccess(){
        return this.state=="unsolved";
    }

}
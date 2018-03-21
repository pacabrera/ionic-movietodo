
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Response } from "@angular/http/src/static_response";
import { IdeaModel } from "../model/idea";

@Injectable()
export class DataService{
ideas:IdeaModel[]=[]
tempidea:IdeaModel;
    constructor(private http:Http){}

    addidea(title:string,content:string,genre:string){
        this.tempidea = new IdeaModel(title,content,genre)
       return this.addData();
    }

addData(){

    return this.http.post("https://click2sched.herokuapp.com/post",{"title":this.tempidea.title,"content":this.tempidea.idea,"genre":this.tempidea.genre}).map((res:Response)=>{
    console.log(res.json())   
    return res.json()
    }).do(()=>{
        this.ideas.push(new IdeaModel(this.tempidea.title,this.tempidea.idea,this.tempidea.genre))
        console.log(this.ideas)
    })

}


getideas(){
    
    return this.ideas.slice()
}

removeIdea(id){
    
 return this.http.delete("https://click2sched.herokuapp.com/delete/"+id)
  

}
getData(){


return this.http.get("https://click2sched.herokuapp.com/getideas").map((res:Response)=>{
    console.log(res.json())
   
    return res.json();
}).do((data)=>{
    this.ideas = data;
     console.log(this.ideas)
})

}

getWatched(){


return this.http.get("https://click2sched.herokuapp.com/getWatched").map((res:Response)=>{
    console.log(res.json())
   
    return res.json();
}).do((data)=>{
    this.ideas = data;
     console.log(this.ideas)
})

}

editIdea(id,title,idea,genre){

    return this.http.put("https://click2sched.herokuapp.com/update/" + id,{title:title,content:idea,genre:genre})

}

rateIdea(id,isWatched,rating){
    return this.http.put("https://click2sched.herokuapp.com/rate/" + id,{isWatched:isWatched,rating:rating})
}
}
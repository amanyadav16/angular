import { Component } from '@angular/core';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  storyData:any;
  
  constructor(private storyService:StoryService){}

  ngOnInit(){
    this.storyService.getStoriesData().subscribe((res:any)=>{
      this.storyData=res;
    })
  }
}

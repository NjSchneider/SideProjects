import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/Services/Audio/audio.service';
import { CloudService } from 'src/app/Services/Cloud/cloud.service';
import { StreamState } from 'src/app/Interfaces/stream-state';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  songs: Array<any> = [];
  state: StreamState;
  currentSong: any = {};
  band: string = "Avenged Sevenfold"
  bandLogo: string = "assets/Images/A7X.jpg"

  constructor(private audioService: AudioService, private cloudService: CloudService) { }

  ngOnInit() { 
    this.cloudService.getSongs().subscribe((result: any[]) =>{
      console.log(result);
      this.songs = result;
    });

    this.audioService.getState().subscribe(state =>{
      this.state = state;
    });
  }

  playStream(song: string): void{
    this.audioService.playStream(song).subscribe(events =>{});
  }

  openSong(song: any, index:number): void{
    this.currentSong = {index, song};
    this.audioService.stop();
    this.playStream(song.Path);
  }

  pause(): void{
    this.audioService.pause();
  }

  play(): void{
    this.audioService.play();
  }

  stop(): void{
    this.audioService.stop();
  }

  next(): void{
    const index  = this.currentSong.index + 1;
    const song = this.songs[index];
    this.openSong(song, index);
  }

  previous(): void{
    const index = this.currentSong.index - 1;
    const song = this.songs[index];
    this.openSong(song, index);
  }

  onSliderChangeEnd(change: any): void{
    this.audioService.seekTo(change.value);
  }

  // resetSlider(){
    
  // }

  isFirstPlaying(): boolean{
    return this.currentSong.index === 0;
  }

  isLastPlaying(): boolean{
    return this.currentSong.index === this.songs.length - 1;
  }

}

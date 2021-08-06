import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Prizes } from '../interfaces/prizes';
import { VynilsPrizesService } from '../services/vynils-prizes.service';
import { TablePrizesDetailComponent } from '../table-prizes-detail/table-prizes-detail.component';

@Component({
  selector: 'app-table-prizes',
  templateUrl: './table-prizes.component.html',
  styleUrls: ['./table-prizes.component.css'],
  providers: [VynilsPrizesService]
})
export class TablePrizesComponent {

  prizes: Prizes[] = [];
/*   @ViewChild("prizeIdView")
  tablePrizesDetailComponent!: TablePrizesDetailComponent; */
  prizeIdSource!:number;
  showDetailPrizes:boolean=false;
  constructor(private vinilsPrizesService: VynilsPrizesService) {
    this.vinilsPrizesService.getVynilsPrizes()
      .subscribe((data: Prizes[]) => {
        this.prizes = data;
      });

  }

  showVynilsPrizes() {
    this.vinilsPrizesService.getVynilsPrizes()
      .subscribe((data: Prizes[]) => {
        console.log(data);
      });

  }

  setPrizeIdAfterIdRowIsClicked(prizeId:number){
    this.prizeIdSource=prizeId;
    console.log("Prize id source",this.prizeIdSource)
    //this.tablePrizesDetailComponent.prizeId=this.prizeId;
    this.showDetailPrizes=true;
  }



}

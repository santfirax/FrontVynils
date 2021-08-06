import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Prizes } from '../interfaces/prizes';
import { VynilsPrizesService } from '../services/vynils-prizes.service';


@Component({
  selector: 'app-table-prizes-detail',
  templateUrl: './table-prizes-detail.component.html',
  styleUrls: ['./table-prizes-detail.component.css'],
  providers: [VynilsPrizesService]
})
export class TablePrizesDetailComponent implements OnInit {
  @Input("prizeIdChild")
  prizeIdChild!: number;
  prize!: Prizes;
  showDetails: boolean = false;
  vynilsSubscription!: Subscription;

  constructor(private vynilsPrizesService: VynilsPrizesService) {
    /*     console.log("idChild", this.prizeIdChild)
        this.vynilsPrizesService.getVynil(this.prizeIdChild)
          .subscribe((data: Prizes) => {
            console.log(data);
            this.prize = data;
          }) */
    //Jodase constructor, preguntar a Juan la diferencia
  }
  ngOnInit(): void {
    console.log("idChild", this.prizeIdChild)
    this.vynilsSubscription = this.vynilsPrizesService.getVynil(this.prizeIdChild).subscribe((data: Prizes) => {
      this.prize = data;
    });
  }
  ngOnDestroy(): void {
    this.vynilsSubscription.unsubscribe()

  }




}

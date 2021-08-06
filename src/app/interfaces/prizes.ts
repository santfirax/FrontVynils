interface PerformerPrizes {
    id: number,
    premiationDate: string,
}


export interface Prizes {
    id: number,
    organization: string,
    name: string,
    description: string,
    performerPrizes: PerformerPrizes,

}
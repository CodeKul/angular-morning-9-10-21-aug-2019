import { CardInfo } from './card.domain';
export interface CardEvent {
    tmp: number
    parent: string
    card: CardInfo
}
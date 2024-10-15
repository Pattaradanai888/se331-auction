export interface Auctions {
  id: number
  description: string
  type: string
  date: string
  time: string
  bids: Bid
  successfulBid: Bid
}

export interface Bid {
  id: number
  amount: number
  datetime: string
}

export interface EventState {
  event: Event | null
}

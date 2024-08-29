export type UserDataStatus = 'completed' | 'pending' | 'failed';

type UserData = {
  id: string;
  savedCards: number,
  name: string,
  coverImg: string,
  avatar: string,
  description: string,
  jobtitle: string,
  location: string,
  followers: string
}

type OrdersData = {
  total: string,
  failed: string
}

type FavouritesData = {
  products: string,
  lists: string
}

type ReviewssData = {
  total: string,
  useful: string
}

type Group = {
  logo?: string,
  title: string,
  path?: string
}

interface GroupsItems extends Array<Group>{}

type FollowersFeed = {
  name: string,
  jobtitle: string,
  company: string,
  avatar: string
}

interface FollowersFeedItems extends Array<FollowersFeed>{}

type Address = {
  saved: string,
  addressLine1: string,
  addressNumber: string,
  street: string
}
export interface RecentActivityData {
  orders: OrdersData,
  favourites: FavouritesData,
  reviews: ReviewssData
}

type Card = {
  lastDigits: string,
  expires: string,
  logo: string,
  alt: string
}

interface CardItems extends Array<Card>{}
export interface UserDetails {
  user: UserData
}
export interface RecentActivityDetails {
  activity: RecentActivityData,
}
export interface FollowersFeedDetails {
  feeds: FollowersFeedItems
}
export interface PopularTagsDetails {
  tags: any, 
  groups: GroupsItems
}
export interface AddressDetails {
  deliveryAddresses: Address,
  shippingAddress: Address
}

export interface CardDetails {
  cards: CardItems
}
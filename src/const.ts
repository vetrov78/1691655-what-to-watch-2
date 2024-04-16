export const enum Setting {
  filmCardsNumber = 20,
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/my-list',
  Review = '/film/:id/review',
  Player = '/player/:id',
  Film = '/film/:id',

}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
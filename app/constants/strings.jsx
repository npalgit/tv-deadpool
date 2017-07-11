export const BETSLIST_SORTBY = {
  ARTICLE: 'avc',
  WIN_LOSS: 'winloss'
}

// Defaults
export const PRETTY_DATE_FORMAT = 'ddd, MMM Do YYYY, h:mm:ss a Z';
export const LOCALE = 'en-US';
export const CURRENCY_FORMAT = { style: 'currency', currency: 'USD', maximumFractionDigits: 0 };
export const DEFAULT_DISPLAY_NAME='A Faceless Man';


// Words
export const EDIT = 'edit';
export const DELETE = 'delete';
export const SELECT_SERIES = 'Select Series:';
export const NEW_SERIES = 'Create new series:';
export const NEW_SEASON = 'Create new season:';
export const UPDATE_SEASON = 'Update season';
export const NEW_EPISODE = 'Create new episode:';
export const NEW_BET = 'Create new bet:';
export const THE_FIELD = 'The Field';
export const AVC_STAFFERS = 'AVClub Staffers';
export const EXCLUDE_LIST = 'EXCLUDE';
export const BALANCE = 'Balance';
export const WINNINGS = 'Total Won';
export const LOSSES = 'Total Lost';

// Labels for specific form elements
export const LABEL_TITLE = 'Title:';
export const LABEL_DESCRIPTION = 'Description:';
export const LABEL_PUBLISHED = 'Published?';
export const LABEL_SEASON_NUMBER = 'Season Number:';
export const LABEL_EPISODE_NUMBER = 'Episode Number:';
export const LABEL_ARTICLE_URI = 'URL to AVClub Article:';
export const LABEL_OFFICIAL_URI = 'URL to Official Webpage:';
export const LABEL_PREVIEW_URI = 'URL to video preview:';
export const LABEL_AIR_AT = 'Airs at (RFC3339 Datetime):';
export const LABEL_LOCK_AT = 'Lock all betting at (RFC3339 Datetime):';
export const LABEL_BET_ODDS_PAYOUT = 'Odds Payout (e.g. <b>3</b>:1):';
export const LABEL_BET_ODDS_WAGER = 'Wager (e.g. 3:<b>1</b>):';
export const LABEL_BET_ORDER = 'Order in the list of bets:';
export const LABEL_BET_NAME = 'Description of terms:';
export const LABEL_BET_DESCRIPTION = 'Additional info (usually specific character names for group bets):';
export const LABEL_SEASON_LOCK_AT = 'Close season at (RFC3339 Datetime):';

// Icons for common nouns
export const CLS_ICON_USER = 'fa fa-fw fa-user';
export const CLS_ICON_SUBMIT = 'fa fa-fw fa-cog';
export const CLS_ICON_SUBMITTING = CLS_ICON_SUBMIT + ' fa-spin';
export const CLS_ICON_CANCEL = 'fa fa-fw fa-ban';


// Input element placeholder text
export const INPUT_PLACEHOLDER_DISPLAYNAME = 'Change your name.';


// Button text
export const BTN_LABEL_NEW = 'New';
export const BTN_LABEL_CREATE = 'Create';
export const BTN_LABEL_SUBMIT = 'Save';
export const BTN_LABEL_CANCEL = 'Cancel';


// Errors
export const ERROR_DISPLAYNAME = 'Please enter a name.';
export const ERROR_DUPLICATE_FN = (value) => { return `Sorry, "${value}" is not available`};

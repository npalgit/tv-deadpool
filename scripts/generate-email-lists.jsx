/**
 * generate-email-lists.jsx - Generartes list of people to email.
 *
 *
 * SAFE TO RUN - DOES NOT ALTER DATA
 */
const PAST_SEASON = 'gameofthrones-06';
const CURRENT_SEASON = 'gameofthrones-07';
const SEASON_EPISODES = ['gameofthrones-07-01', 'gameofthrones-07-02', 'gameofthrones-07-03'];
const CURRENT_EPISODE = 'gameofthrones-07-04';

import fs from 'fs';
import firebaseApp from './lib/firebase-app';
import moment from 'moment';
import { toArray } from '../app/utils';
import { fetchFirebaseDataFn, err } from './lib/lib';


// The app only has access as defined in the Security Rules
const db = firebaseApp.database();


const fetchUsers = fetchFirebaseDataFn(db, 'users');
const fetchSecure = fetchFirebaseDataFn(db, 'secure');
const fetchBets = fetchFirebaseDataFn(db, 'bets');


function generateEmailLists(users, secure, bets) {

  let emails_last_season = [];
  let emails_this_season = [];

  for (let userId in users) {
    const user = users[userId];
    const secureUser = secure[userId];
    const { wagers } = user;

    const email = secureUser ? secureUser.email : false;

    // Can skip entirely if there is no email address set.
    if (email) {

      let wageredLastSeason = false;
      let wageredThisSeason = false;

      let seasons = {};
      let episodes = {};

      for (let wagerId in wagers) {
        seasons[bets[wagerId].season] = true;
        episodes[bets[wagerId].episode] = true;
      }

      const seasonsArr = Object.keys(seasons);

      // wageredLastSeason = seasonsArr.includes(PAST_SEASON) && !seasonsArr.includes(CURRENT_SEASON);
      // Don't recalculate last season emails.
      wageredLastSeason = false;
      wageredThisSeason = !episodes[CURRENT_EPISODE] && SEASON_EPISODES.reduce((result, item) => episodes[item] || result, false);


      if (wageredThisSeason) {
        emails_this_season.push(email);
      }
      // } else if (wageredLastSeason) {
      //   emails_last_season.push(email);
      // }
    }
  }

  // const emails_last_season_str = emails_last_season.sort().reduce((str, item) => { return str + item + '\n'}, '');
  const emails_this_season_str = emails_this_season.sort().reduce((str, item) => { return str + item + '\n'}, '');


  function writeThisSeason(e) {
    if (e) err(e);
    fs.writeFile('this_season.txt', emails_this_season_str, err);
  }

  writeThisSeason(false);
  // fs.writeFile('last_season.txt', emails_last_season_str, writeThisSeason);
  // console.log('EMAILS FROM LAST YEAR', emails_last_season.length)
  console.log('Emails from this season without wagers in', CURRENT_EPISODE, emails_this_season.length);
}



fetchUsers.then(users => {
  fetchSecure.then(secure => {
    fetchBets.then(bets => {
      try {
        generateEmailLists(users, secure, bets);
      } catch (e) {
        err(e);
      }
    });
  });
});


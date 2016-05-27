import moment from 'moment';

let i = 1;

export var Bets = {
  '6': [],
  '5': [
    {
      name: 'Loras Tyrell',
      desc: '',
      odds_payout: 3,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Kevan Lannister',
      desc: 'The Hand of the King',
      odds_payout: 4,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Rickon Stark',
      desc: '',
      odds_payout: 4,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Jorah Mormont',
      desc: '',
      odds_payout: 5,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Daario Naharis',
      desc: '',
      odds_payout: 8,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Theon, Yara, or Aeron Greyjoy',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'The Field',
      desc: 'Grand Maester Pycelle, The Night’s King, Meera Reed, Leaf, Daenerys’ new khaleesi friend, the High Priestess Of The Dosh Khaleen, or any of the emissaries Tyrion made a deal with this past week',
      odds_payout: 15,
      odds_wager: 1,
      paid: true,
      note: 'Leaf.',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Robin Arryn',
      desc: '',
      odds_payout: 15,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Varys',
      desc: '',
      odds_payout: 20,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Grey Worm',
      desc: '',
      odds_payout: 20,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Littlefinger',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Littlefinger',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'No one on our list dies',
      desc: '',
      odds_payout: 30,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'The Three-Eyed Raven',
      desc: '',
      odds_payout: 40,
      odds_wager: 1,
      paid: true,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Ramsay Bolton',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Missandei',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Bran Stark',
      desc: '',
      odds_payout: 100,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Melisandre',
      desc: '',
      odds_payout: 100,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Over on total deaths: 4 ½',
      desc: '',
      odds_payout: 1,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }, {
      name: 'Under on total deaths: 4 ½',
      desc: '',
      odds_payout: 1,
      odds_wager: 1,
      paid: true,
      note: 'Three-Eyed Raven, Summer, Leaf, Hodor.',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-20T00:00:00Z').unix(),
      updated_at: moment('2016-05-20T00:00:00Z').unix()
    }
  ],

  '4': [
    {
      name: 'Ramsay Bolton',
      desc: '',
      odds_payout: 2,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Rickon Stark',
      desc: '',
      odds_payout: 3,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Osha',
      desc: '',
      odds_payout: 4,
      odds_wager: 1,
      paid: true,
      note: 'Stabbed to death by Ramsay Bolton.',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Tommen Baratheon',
      desc: '',
      odds_payout: 8,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Theon Greyjoy',
      desc: '',
      odds_payout: 8,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Yara Greyjoy',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Aeron Greyjoy',
      desc: '',
      odds_payout: 15,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Smalljon Umber',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Khal Moro',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: true,
      note: 'Murdered by Daenerys.',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Grey Worm',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Eddison Tollett',
      desc: '',
      odds_payout: 15,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Tormund Giantsbane',
      desc: '',
      odds_payout: 15,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'One of the wolves dies',
      desc: '',
      odds_payout: 15,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Walder Frey',
      desc: '',
      odds_payout: 20,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Loras Tyrell',
      desc: '',
      odds_payout: 20,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Littlefinger',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Qyburn',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Ellaria Sand',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Any one of the Sand Snakes',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Gilly',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Samwell Tarly',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Randyll Tarly',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Ser Gregor Clegane',
      desc: '(a.k.a. The Mountain, a.k.a. Robert Strong)',
      odds_payout: 30,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'No one on our list dies',
      desc: '',
      odds_payout: 30,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Robin Arryn',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Davos Seaworth',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Over on deaths: 3 ½',
      desc: '',
      odds_payout: 1,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Under on deaths: 3 ½',
      desc: '',
      odds_payout: 1,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }
  ],
  '3': [
    {
      name: 'The Waif',
      desc: '',
      odds_payout: 2,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Alliser Thorne',
      desc: '',
      odds_payout: 3,
      odds_wager: 1,
      paid: true,
      note: 'Executed by Jon Snow.',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Tommen Baratheon',
      desc: '',
      odds_payout: 5,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Jorah Mormont',
      desc: '',
      odds_payout: 6,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Theon Greyjoy',
      desc: '',
      odds_payout: 8,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Ramsay Bolton',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'No one from our list dies this week',
      desc: '',
      odds_payout: 10,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'The High Sparrow',
      desc: '',
      odds_payout: 20,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Podrick Payne',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Olly',
      desc: '',
      odds_payout: 25,
      odds_wager: 1,
      paid: true,
      note: 'Executed by Jon Snow.',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Brienne Of Tarth',
      desc: '',
      odds_payout: 30,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Varys',
      desc: '',
      odds_payout: 40,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Grey Worm',
      desc: '',
      odds_payout: 40,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Jaime Lannister',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Margaery Tyrell',
      desc: '',
      odds_payout: 75,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Sansa Stark',
      desc: '',
      odds_payout: 100,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Any of the dragons',
      desc: '',
      odds_payout: 100,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Melisandre',
      desc: '',
      odds_payout: 100,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Over on total deaths: 4 ½',
      desc: '',
      odds_payout: 1,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }, {
      name: 'Under on total deaths: 4 ½',
      desc: '',
      odds_payout: 1,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-06T00:00:00Z').unix(),
      updated_at: moment('2016-05-06T00:00:00Z').unix()
    }
  ],
  '2': [
    {
      name: 'Alliser Thorne',
      desc: '',
      odds_payout: 2,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Davos Seaworth',
      desc: '',
      odds_payout: 3,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Theon Greyjoy',
      desc: '',
      odds_payout: 4,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Jorah Mormont',
      desc: '',
      odds_payout: 5,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Tommen Baratheon',
      desc: '',
      odds_payout: 6,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Ellaria Sand',
      desc: '',
      odds_payout: 8,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Loras Tyrell',
      desc: '',
      odds_payout: 15,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Tyrion Lannister',
      desc: '',
      odds_payout: 50,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }, {
      name: 'Melisandre',
      desc: '',
      odds_payout: 100,
      odds_wager: 1,
      paid: false,
      note: '',
      official: true,
      order: i++,
      published: true,
      created_at: moment('2016-05-13T00:00:00Z').unix(),
      updated_at: moment('2016-05-13T00:00:00Z').unix()
    }
  ]
};

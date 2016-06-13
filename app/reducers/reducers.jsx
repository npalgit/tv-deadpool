import moment from 'moment';


export var eventsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_EVENTS_DATA':
      return action.updatedData;
    default:
      return state;
  };
};

export var betsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_BETS_DATA':
      return action.updatedData;
    default:
      return state;
  };
};

export var usersReducer = (state = {}, action) => {
  let newUser = {};

  switch(action.type) {
    case 'UPDATE_USER':
      newUser[action.data.id] = action.data;
      return {
        ...state,
        ...newUser
      }
    case 'UPDATE_DISPLAY_NAME':
      let user = state[action.uid];
      user.displayName = action.displayName;
      newUser[`${action.uid}`] = user;
      return {
        ...state,
        ...newUser
      }
    case 'PLACE_WAGER':
      if (!state) {
        return state;
      } else {
        let betId = action.bet.id;
        let prevWager = state[betId] ? state[betId].wager : 0;
        let balance = state.balance + prevWager - action.bet.wager;
        let wagers = {
          ...state.wagers
        };
        wagers[betId] = action.bet;
        return {
          ...state,
          balance,
          wagers
        };

      }
      return state;
    case 'LOGOUT':
      return {};
    default:
      return state;
  };
};

export var loginReducer = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'UPDATE_USER': {
      let user = action.data;
      if (state.uid === user.id) {
        return {
          ...state,
          user
        }
      } else {
        return state;
      }
    }
    case 'UPDATE_DISPLAY_NAME':{
      let user = state.user;
      user.displayName = action.displayName;
      return {
        ...state,
        user
      }
    }
    case 'UPDATE_SECURE':
      return {
        ...state,
        secure: action.data
      }
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export var leaderboardReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_LEADERBOARD_DATA':
      return {
        ...action.updatedData
      }
    case 'UPDATE_LEADERBOARD_ENTRY':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
};

export var statsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_STATS_DATA':
      return {
        ...action.updatedData
      }
    default:
      return state;
  }
};


export var labelsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_LABEL':
      let newState = {...state};
      newState[action.label] = action.data;
      return newState;
    default:
      return state;
  }
};


export var prefsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_PREFERENCE': {
      let newState = {...state};
      const context = action.context || 'default';
      newState[context] = newState[context] || {};
      newState[context][action.pref] = action.value;
      return newState;
    }
    case 'SET_PREFERENCES': {
      let newState = {...state};
      const context = action.context || 'default';
      newState[context] = action.value || {};
      return newState;
    }
    default:
      return state;
  }
};



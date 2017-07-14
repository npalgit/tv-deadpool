import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isLoggedIn } from 'api/firebase';
import Login from 'Login';
import DisplayName from 'DisplayName';
import EpisodeList from 'EpisodeList';
import Balance from 'Balance';
import Leaderboard from 'Leaderboard';


export class GameBoard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { seasonId, context } = this.props;

    return (
      <div className="row">
        <div className="small-12 medium-4 medium-push-8 columns">
          { isLoggedIn() ? <div><DisplayName/><Balance seasonId={seasonId}/></div> : <Login/> }
          <Leaderboard label="AVClub Staffers" seasonId={seasonId} userId="0"/>
          <Leaderboard label="The Field" seasonId={seasonId} userId="0"/>
        </div>
        <div className="small-12 medium-8 medium-pull-4 columns">
          <EpisodeList seasonId={seasonId} context={context}/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  const { seasonId } = ownProps.match.params;
  return { seasonId, context: 'GameBoard' };
};

export default withRouter(connect(mapStateToProps)(GameBoard));
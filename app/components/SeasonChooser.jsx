import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toArray } from 'utils';
import SeasonHero from 'SeasonHero';
import * as str from 'constants/strings';


export class SeasonChooser extends React.Component {

  render() {
    var { series, seasons } = this.props;

    const now = Date.now();

    function seasonItem(season, series) {
      return (
        <Link to={ `/game/season/${season.id}` }  key={ season.id }>
          <SeasonHero season={ season } series={ series }/>
        </Link>
      );
    }

    const currentSeasons = toArray(seasons)
      .filter(season => season.lock_at >= now)
      .map(season => seasonItem(season, series[season.series]));

    const pastSeasons = toArray(seasons)
      .filter(season => season.lock_at < now)
      .map(season => seasonItem(season, series[season.series]));

    return (
      <div className="row season-chooser">
        <div className="small-12 columns">
          <div className="title">{ str.SEASONS_CURRENT }</div>
            { currentSeasons }
          <div className="title">{ str.SEASONS_OLD }</div>
            { pastSeasons }
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { series, seasons } = state;
  return { series, seasons };
};

export default connect(mapStateToProps)(SeasonChooser);
import React from 'react';
import { connect } from 'react-redux';


export const SeasonHero = (props) => {

  const { series, season } = props;

  const divStyle = {
    backgroundImage: season.hero ? `url(${season.hero})` : ''
  }
    // fontFamily: season.font ? season.font : ''

  return (
    <div className="season-hero" style={ divStyle }>

      <div className="bottom_aligner"/>
      <div className="series-title">
        { series.title }
      </div>

      <div className="season-title">
        Season { season.season }
      </div>

    </div>
  );
}



function mapStateToProps(state, ownProps) {
  const series = state.series[ownProps.season.series];
  return { series };
};

export default connect(mapStateToProps)(SeasonHero);
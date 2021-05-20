import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RocketDetails.module.css';
import PropTypes from 'prop-types';

const RocketDetails = (props) => {
    // console.log(props);
    // console.log(props.match.params.rocketId);
    const { rocketId } = props.match.params;
    const {rocketLists} = props;
    // console.log(rocketLists);

    const filteredLists = rocketLists.filter((rocketList)=>{
      // console.log(rocketList.id);
      // console.log(rocketId);
      return rocketList.id == rocketId;
    });

    // console.log(filteredLists);
    return (
        <div className={styles.rocketDetails}>
          {filteredLists.length != 0 ? (
            <div className={styles.detailContainer}>
              <h1>{filteredLists[0].rocket_name}</h1>
              <p className={styles.rocketDescription}>{filteredLists[0].description}</p>
              <img className={styles.rocketDetailImg} src={filteredLists[0].flickr_images} alt={filteredLists[0].rocket_name} />

              <h2 className={styles.heading}>Technical Overview</h2>
              <div className={styles.overviewContainer}>
                <div className={styles.categoryContainer}>
                  <h3>Height</h3>
                  <p>{filteredLists[0].height.meters}m</p>
                  <p>/ {filteredLists[0].height.feet}ft</p>
                </div>
                <div className={styles.categoryContainer}>
                  <h3>Diameter</h3>
                  <p>{filteredLists[0].diameter.meters}m</p>
                  <p>/ {filteredLists[0].diameter.feet}ft</p>
                </div>
                <div className={styles.categoryContainer}>
                  <h3>Mass</h3>
                  <p>{filteredLists[0].mass.kg}kg</p>
                  <p>/ {filteredLists[0].mass.lb}lb</p>
                </div>
              </div>
              <div className={styles.payloadContainer}>
                <h3>Payload Weights</h3>
                <div className={styles.payloadList}>
                {filteredLists[0].payload_weights.map((payload, i) => {
                  return (
                    <React.Fragment　key={i}>
                      <div className={styles.categoryContainer}>
                        <h3 className={styles.payloadName}>To {payload.id.toUpperCase()}</h3>
                        <h5> ({payload.name})</h5>
                        <p>{payload.kg}kg</p>
                        <p>/ {payload.lb}lb</p>
                      </div>
                    </React.Fragment>
                  )}
                )}
                </div>
              </div>

              <Link className={styles.link} to="/rockets">Go Back</Link>
            </div>
          ):(
            <div className={styles.noData}>
              <h2>No data</h2>
            </div>
          )}
        </div>
    );
}

RocketDetails.propTypes = {
      rocketId: PropTypes.object,
      rocketLists: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.node,
      ]),
  }

export default RocketDetails;

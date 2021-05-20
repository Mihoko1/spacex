import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Rockets.module.css';

import Card from '../../components/Card/Card';
import rocketImg from './rocket2.jpg';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const {rocketLists} = props;
  // console.log(rocketLists);

  return(
    <div className={styles.rockets}>
      <img className={styles.rocketImg} src={rocketImg} alt="Rocket ship launching during daytime" />
      <div className={styles.colorFilter}>
      <h1 className="title">ROCKETS</h1>
      </div>
      <div className={styles.rocketContents}>
      <section className={styles.rocketsContainer} >
      {rocketLists.map( (rocketList) => {
        return (
          <React.Fragment key={rocketList.id}>
          <Link to ={`/rockets/${rocketList.id}`}>
            <Card>

              <h2 className={styles.rocketName}>{rocketList.rocket_name}</h2>
              <table>
                <tbody>
                  <tr>
                    <th className={styles.title}>Cost per launch</th>
                    <td className={styles.value}>{rocketList.cost_per_launch.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th className={styles.title}>Success rate</th>
                    <td className={styles.value}>{rocketList.success_rate_pct}</td>
                  </tr>
                </tbody>
              </table>

            </Card>
            </Link>
            </React.Fragment>
        )
      })}
      </section>
      </div>
    </div>

  );
}

Rockets.propTypes = {
      rocketLists: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.node,
      ]),
  }


export default Rockets;

import React from 'react';
import styles from './History.module.css';

import Card from '../../components/Card/Card';
import historyImg from './history2.jpg';
import PropTypes from 'prop-types';

const History = (props) => {

  const {lists} = props;
  // console.log(lists);

  const dateConvert = timestamp =>{
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getUTCFullYear();
    var month = months[a.getUTCMonth()];
    var date = a.getUTCDate();
    var time =  month + ' ' + date + ', ' + year;
    return time;
  }

  return(
    <div className={styles.history}>
    <img className={styles.historyImg} src={historyImg} alt="Rocket ship launching during daytime" />
    <div className={styles.colorFilter}>
    <h1 className="title">HISTORY</h1>
    </div>
        {lists.map( (list) => {
          return (
            <section className={styles.historyContainer} key={list.id}>
              <Card>
                <h2>{list.title}</h2>
                <p>{dateConvert(list.event_date_unix)}</p>
                <p>{list.details}</p>
                <a href={list.links.wikipedia}>{list.links.wikipedia}</a>

              </Card>
            </section>
          )
        })}
    </div>

  );
}

History.propTypes = {
      lists: PropTypes.array,
  }

export default History;

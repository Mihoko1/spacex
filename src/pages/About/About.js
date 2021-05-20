import React from 'react';
import styles from './About.module.css';
import PropTypes from 'prop-types';

const About = (props) => {

  const {companyLists} = props;
  // console.log(companyLists);

  return(
    <div className={styles.about}>
      <h1>COMPANY PROFILE</h1>
        <div className={styles.tableContainer}>
          <table>
            <tbody>
              <tr>
              <th className={styles.infoTitle}>Company Name</th>
              <td className={styles.infoValue}>{companyLists.name}</td>
              </tr>
              <tr>
              <th className={styles.infoTitle}>Founded</th>
              <td className={styles.infoValue}>{companyLists.founded}</td>
              </tr>
              <tr>
              <th className={styles.infoTitle}>CEO</th>
              <td className={styles.infoValue}>{companyLists.ceo}</td>
              </tr>
              <tr>
              <th className={styles.infoTitle}>COO</th>
              <td className={styles.infoValue}>{companyLists.coo}</td>
              </tr>
              <tr>
              <th className={styles.infoTitle}>Valuation</th>
              <td className={styles.infoValue}>$ {companyLists.valuation.toLocaleString()}</td>
              </tr>
              <tr>
              <th className={styles.infoTitle}>Summary</th>
              <td className={styles.infoValue}>{companyLists.summary}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>

  );
};

About.propTypes = {
    companyLists: PropTypes.any.isRequired,
}

export default About;

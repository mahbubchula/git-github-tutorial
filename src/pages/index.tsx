import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Interactive lessons that show every Git & GitHub move in plain language.
        </p>
        <div className={styles.heroChips}>
          <span className={styles.chip}>Step-by-step demos</span>
          <span className={styles.chip}>Mahbub Hassan branding</span>
          <span className={styles.chip}>Practice checklists</span>
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            View learning path
          </Link>
          <Link className="button button--outline button--lg" to="https://github.com/mahbubchula/git-github-tutorial">
            GitHub repo
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div>
            <p className={styles.statLabel}>Modules</p>
            <p className={styles.statValue}>4</p>
            <p className={styles.statNote}>Setup · Track · Teamwork · Deliver</p>
          </div>
          <div>
            <p className={styles.statLabel}>Practice time</p>
            <p className={styles.statValue}>20 min / day</p>
            <p className={styles.statNote}>Short labs with copy-ready commands</p>
          </div>
          <div>
            <p className={styles.statLabel}>Built by</p>
            <p className={styles.statValue}>Mahbub Hassan</p>
            <p className={styles.statNote}>Graduate Student & Non ASEAN Scholar · Chulalongkorn University</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Easy Git & GitHub tutorial for students with interactive cards, tasks, and checklists.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

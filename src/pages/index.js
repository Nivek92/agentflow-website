import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from "@theme/CodeBlock";

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <div className={clsx(styles.container)}>
          <h1 className={clsx(styles.title)}>{siteConfig.title}</h1>
          <p className={clsx(styles.subtitle)}>{siteConfig.tagline}</p>

          <CodeBlock className={clsx(styles.code)}>pip install agentflow</CodeBlock>

          <iframe
            src={
              'https://ghbtns.com/github-btn.html?user=NiVeK92&repo=agentflow&type=star&count=true&size=large'
            }
            width="160px"
            height="30px"
          />
      </div>
    </Layout>
  );
}

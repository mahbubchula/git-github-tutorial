import type {ReactNode} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Module = {
  id: string;
  title: string;
  summary: string;
  minutes: number;
  docLink: string;
  tasks: string[];
};

type Scenario = {
  id: string;
  name: string;
  steps: string[];
  commands: string[];
  tip: string;
};

const modules: Module[] = [
  {
    id: 'setup',
    title: 'Module 01 · Setup Confidence',
    summary: 'Install Git, configure your identity, and authenticate with GitHub.',
    minutes: 20,
    docLink: '/docs/start/quick-setup',
    tasks: ['Install Git on your OS', 'Set name/email + default branch', 'Connect via HTTPS or SSH'],
  },
  {
    id: 'track',
    title: 'Module 02 · Track Changes',
    summary: 'Move safely between working tree, staging area, and history.',
    minutes: 25,
    docLink: '/docs/track/snapshots',
    tasks: ['Run git status -sb often', 'Stage by hunk with git add -p', 'Write meaningful commits'],
  },
  {
    id: 'teamwork',
    title: 'Module 03 · Teamwork',
    summary: 'Create branches, open pull requests, and review politely.',
    minutes: 30,
    docLink: '/docs/teamwork/branches',
    tasks: ['Create branch type/topic', 'Sync with main daily', 'Review with Observation ? Impact ? Suggestion'],
  },
  {
    id: 'deliver',
    title: 'Module 04 · Deliver & Automate',
    summary: 'Tag releases, ship GitHub Pages, and run CI via GitHub Actions.',
    minutes: 20,
    docLink: '/docs/deliver/releases',
    tasks: ['Tag and publish releases', 'Enable GitHub Pages', 'Add a simple CI workflow'],
  },
];

const scenarios: Scenario[] = [
  {
    id: 'snapshot',
    name: 'Create a clean snapshot',
    steps: ['Check for dirty files', 'Stage with intention', 'Commit with a verb + object message'],
    commands: ['git status -sb', 'git add src/app.tsx', 'git commit -m "feat: add card"'],
    tip: 'Use present tense in commit messages so the log reads like instructions.',
  },
  {
    id: 'undo',
    name: 'Undo without panic',
    steps: ['Restore working tree', 'Unstage mistakes', 'Create a revert commit'],
    commands: ['git restore README.md', 'git restore --staged README.md', 'git revert <commit>'],
    tip: 'Prefer git revert over git reset --hard once you already pushed.',
  },
  {
    id: 'collab',
    name: 'Publish a branch & PR',
    steps: ['Sync with main', 'Push branch', 'Open pull request'],
    commands: ['git fetch origin && git rebase origin/main', 'git push -u origin feat/ui-cleanup', 'Open PR via GitHub UI'],
    tip: 'Fill Context ? Changes ? Testing ? Screenshots before requesting review.',
  },
];

const habitChecklist = [
  'Run git status -sb before coding and after commits.',
  'Write down commands you use in COMMAND-LOG.md.',
  'Delete merged branches locally and on origin.',
  'Skim CI logs even when they pass to learn what ran.',
];

function ModuleCard({module}: {module: Module}) {
  const [progress, setProgress] = useState<boolean[]>(module.tasks.map(() => false));
  const completed = progress.filter(Boolean).length;
  const percent = Math.round((completed / module.tasks.length) * 100);

  const toggleTask = (index: number) => {
    setProgress((prev) => prev.map((value, taskIndex) => (taskIndex === index ? !value : value)));
  };

  return (
    <div className={styles.moduleCard}>
      <div className={styles.moduleHeader}>
        <h3>{module.title}</h3>
        <p>{module.summary}</p>
        <p className={styles.moduleMeta}>{module.minutes} min • <Link to={module.docLink}>Open module</Link></p>
      </div>
      <div className={styles.progressBar}>
        <div style={{width: `${percent}%`}} aria-label={`Progress ${percent}%`} />
      </div>
      <ul className={styles.taskList}>
        {module.tasks.map((task, index) => (
          <li key={task}>
            <button type="button" onClick={() => toggleTask(index)} className={clsx(progress[index] && styles.taskDone)}>
              {progress[index] ? '?' : '?'}
            </button>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PracticePlayground() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const activeScenario = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

  return (
    <div className={styles.playground}>
      <div className={styles.playgroundTabs}>
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            className={clsx(styles.playgroundTab, activeId === scenario.id && styles.playgroundTabActive)}
            onClick={() => setActiveId(scenario.id)}>
            {scenario.name}
          </button>
        ))}
      </div>
      <div className={styles.playgroundBody}>
        <ol>
          {activeScenario.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <pre>
{activeScenario.commands.join('\n')}
        </pre>
        <p className={styles.tip}>{activeScenario.tip}</p>
      </div>
    </div>
  );
}

function HabitChecklist() {
  const [checked, setChecked] = useState<boolean[]>(habitChecklist.map(() => false));

  const toggleItem = (index: number) => {
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  return (
    <div className={styles.habitCard}>
      <h3>Daily Git habits</h3>
      <ul>
        {habitChecklist.map((item, index) => (
          <li key={item}>
            <label>
              <input type="checkbox" checked={checked[index]} onChange={() => toggleItem(index)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Interactive learning path</p>
          <h2>Pick a module, tick the tasks, and practice commands instantly.</h2>
          <p>Keep this page open while you work—each card links directly to the matching documentation and tracks your progress locally.</p>
        </div>
        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
        <div className={styles.practiceGrid}>
          <div>
            <h3>Command playground</h3>
            <p>Choose a scenario to see the exact commands and reminders to say out loud while you practice.</p>
            <PracticePlayground />
          </div>
          <HabitChecklist />
        </div>
      </div>
    </section>
  );
}

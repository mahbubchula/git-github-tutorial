---
id: quick-setup
title: Module 01 · Setup Confidence
sidebar_label: Setup Confidence
---

> Goal: Install Git, configure your name/email, and connect to GitHub without copy/pasting passwords every day.

## Step 1 · Install Git

| Platform | Command / Link | Notes |
| --- | --- | --- |
| Windows | [Git for Windows](https://git-scm.com/download/win) | Accept defaults, choose *Let Git decide* for line endings, enable Credential Manager. |
| macOS | `brew install git` | If you don''t use Homebrew, the first git command will prompt you to install the Xcode Command Line Tools. |
| Linux | `sudo apt install git` or your distro''s equivalent | Keep Git = 2.40.

Verify:
```bash
git --version
```

## Step 2 · Tell Git who you are

```bash
git config --global user.name "Mahbub Hassan"
git config --global user.email "6870376421@student.chula.ac.th"
git config --global init.defaultBranch main
```

Bonus quality-of-life tweaks:
```bash
git config --global core.autocrlf input
git config --global color.ui auto
git config --global pull.rebase false
```

## Step 3 · Authenticate with GitHub

<details>
<summary>HTTPS + Credential Manager (easiest)</summary>

1. Push once with `git push` and enter your GitHub credentials.
2. The credential manager stores a token so you won''t re-enter it every time.

</details>

<details>
<summary>SSH keys</summary>

```bash
ssh-keygen -t ed25519 -C "6870376421@student.chula.ac.th"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub
```

Paste the public key under **GitHub ? Settings ? SSH and GPG keys**.

Test:
```bash
ssh -T git@github.com
```

</details>

## Done checklist

- [ ] `git --version` prints a number (2.4x or higher).
- [ ] `git config --global --list` shows your name, email, and default branch.
- [ ] `ssh -T git@github.com` or a test push works without repeated passwords.

**Next:** [Create your practice sandbox](warm-up).

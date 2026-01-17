---
title: Install & Configure Git
id: install-config
---

## 1. Install Git the right way

| Platform | Steps |
| --- | --- |
| **Windows** | Install [Git for Windows](https://git-scm.com/download/win). Accept defaults except: *Use Windows'' default console window* and enable *Git Credential Manager*. |
| **macOS** | `brew install git` (or install the Apple Command Line Tools when prompted). |
| **Linux** | `sudo apt install git` or the equivalent package for your distro. |

After installation run:

```bash
git --version
```

## 2. Identify yourself

```bash
git config --global user.name "Mahbub Hassan"
git config --global user.email "6870376421@student.chula.ac.th"
git config --global init.defaultBranch main
```

Add helpful defaults:

```bash
git config --global core.autocrlf input   # keep files cross-platform
git config --global pull.rebase false       # safer for beginners
git config --global fetch.prune true        # clean remote branches
git config --global color.ui auto
```

Check your setup anytime with:

```bash
git config --global --list
```

## 3. Authenticate with GitHub

### Option A · HTTPS + Credential Manager
1. `git credential-manager configure`
2. `git credential-manager store` (push once; Windows prompts for GitHub login).

### Option B · SSH keys
```bash
ssh-keygen -t ed25519 -C "6870376421@student.chula.ac.th"
ssh-add ~/.ssh/id_ed25519
clip < ~/.ssh/id_ed25519.pub   # or pbcopy/cat for macOS/Linux
```
Add the copied key under **GitHub ? Settings ? SSH and GPG keys**. Test with `ssh -T git@github.com`.

## 4. Verify before moving on

- [ ] `git --version` returns 2.45+.
- [ ] `git config --global --list` shows your name, email, default branch, and helpful defaults.
- [ ] A test push to `https://github.com/mahbubchula/git-playground.git` (or your sandbox repo) works without entering a password twice.

When all boxes are checked, continue to **Understand the repository map**.

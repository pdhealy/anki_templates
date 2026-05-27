# Git Commands Reference

## Status & Inspection

```bash
git status
```

Show working tree status — lists staged, unstaged, and untracked files.

```bash
git -C <path> status -sb
```

Show short git status for a repository at `<path>`, including the branch summary.

```bash
git diff
```

Show unstaged changes in the working tree.

```bash
git diff <file>
```

Show unstaged changes for a specific file.

```bash
git diff --staged --stat
```

Show a summary of staged changes (files changed, insertions, deletions).

```bash
git log
```

Show commit history.

```bash
git diff <branch>...HEAD
```

Show all changes on the current branch since it diverged from `<branch>`.

---

## Untracking Files

```bash
git rm --cached <file>
```

Stop tracking a file without deleting it from the working directory. Use this to remove a file from git after adding it to `.gitignore`.

---

## Reverting

```bash
git revert HEAD --no-edit
```

Create a new commit that undoes the last commit, without opening an editor.

```bash
git revert HEAD --no-commit
```

Revert the last commit but leave the changes staged so you can adjust files or craft a custom commit message.

---

## Staging & Committing

```bash
git add <file> [<file2> ...]
```

Stage specific files for commit. Prefer named files over `git add -A` to avoid accidentally staging secrets or binaries.

```bash
git commit -m "<message>"
```

Create a commit with a message. Use a heredoc for multi-line messages:

```bash
git commit -m "$(cat <<'EOF'
Subject line

Body paragraph.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

---

## Listing Branches

```bash
git branch
```

List all local branches. The current branch is marked with `*`.

---

## Submodules

```bash
git submodule add --force <repo-url> <path>
```

Register an existing nested repository (or clone from URL) as a submodule at `<path>`.

```bash
git submodule status
```

Show each submodule commit currently pinned by the parent repository.

---

## Branching & Merging

```bash
git checkout <branch>
```

Switch to an existing branch.

```bash
git merge <branch> --no-ff -m "<message>"
```

Merge a branch into the current branch, forcing a merge commit (no fast-forward) with a custom message.

---

## Remote Operations

```bash
git push
```

Push the current branch to its tracked remote.

```bash
git push -u origin <branch>
```

Push a new branch and set it to track the remote.

```bash
git checkout -b <branch>
```

Create a new local branch and switch to it.

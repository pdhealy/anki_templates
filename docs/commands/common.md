# Common Commands Reference

## File System

```bash
ls
```
List files and directories in the current directory.

```bash
ls <path>
```
List files and directories in the specified `<path>`.

```bash
du -sh <path>
```
Show the total size of `<path>` in a human-readable summary.

```bash
find <path> -maxdepth <n> -type d
```
List directories under `<path>` up to depth `<n>`.

```bash
find <path> -type f
```
List all files (recursively) under `<path>`.

```bash
grep -n "<pattern>" <file>
```
Search for a pattern in a file and print matching lines with line numbers.

```bash
grep -n "pattern1\|pattern2\|pattern3" <file>
```
Search for multiple patterns (alternation) in a file with line numbers.

---

```bash
grep -n "<pattern>" <file> | cat -v
```
Search for a pattern in a file with line numbers, then display non-printable/Unicode characters as escape sequences (useful for verifying Unicode bytes in source files).

---

## Fonts & Files

```bash
curl -sL <url> -o <output-file>
```
Download a file from a URL, following redirects (`-L`), silently (`-s`).

```bash
file <file>
```
Identify a file's type (e.g. distinguishes a real font binary from an HTML redirect).

```bash
base64 -w 0 <file>
```
Base64-encode a file with no line wrapping (`-w 0`), suitable for embedding as a data URI in CSS.

```bash
base64 -w 0 <file> | wc -c
```
Check the byte length of a base64-encoded file before embedding.

---

## Networking

```bash
lsof -nP -iTCP:<port> -sTCP:LISTEN
```
Show which process is listening on a given TCP port (`-n` skips hostname resolution, `-P` skips port name resolution).

```bash
curl -v http://<host>:<port>/
```
Make an HTTP request with verbose output — shows connection attempts, headers, and errors.

```bash
getent ahosts <hostname>
```
Resolve a hostname to all addresses (IPv4 and IPv6) using the system resolver (including `/etc/hosts`).

```bash
ip route | grep default
```
Show the default network gateway and outbound interface.

---

## Process & Environment

```bash
npm install -g @github/copilot
```
Install the GitHub Copilot CLI globally in the current environment.

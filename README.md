# Anki Templates

A collection of custom Anki card templates for language learning, programming, interview prep, and technical reference study.

## Overview

Each template is a small, portable unit made of:

- `front.html`: Front side of the card
- `back.html`: Back side of the card
- `styling.css`: Shared card styling

Templates are designed to be copied directly into Anki's note type editor and customized per subject.

## Available Template Sets

- Chinese vocabulary: `src/chinese_vocab (小牛津)`
- Python tutorial: `src/python_officialtutorial`
- SQL tutorials: `src/sql_tutorials`
- Unix commands: `src/unix_commands`
- Vim tutorial: `src/vim_tutorial`
- Interview prep:
  - Security engineer questions: `src/interview_prep/security_engineer/questions`
  - Security engineer scenarios: `src/interview_prep/security_engineer/scenarios`

## Repository Structure

```text
src/
   <template-topic>/
      front.html
      back.html
      styling.css

   interview_prep/
      <track>/
         <subtopic>/
            front.html
            back.html
            styling.css
```

## How To Use In Anki

1. Open Anki.
2. Go to `Tools -> Manage Note Types`.
3. Create or select a note type.
4. Open `Cards...`.
5. Paste file contents:
   - `front.html` into the front template
   - `back.html` into the back template
   - `styling.css` into the styling section
6. Save and test with a sample note.

## Customization Tips

- Keep HTML field names consistent between `front.html` and `back.html`.
- Prefer editing `styling.css` for visual changes so template logic stays clean.
- Test long text, short text, and empty fields to ensure robust card layouts.

## Contributing

Contributions are welcome.

When adding a new template:

1. Create a new directory under `src/` (or the appropriate nested path).
2. Add `front.html`, `back.html`, and `styling.css`.
3. Follow existing naming and formatting conventions.
4. Update this README to list the new template path.

## License

This project is intended for personal and educational use.

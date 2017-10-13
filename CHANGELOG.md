# Release history

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<details>
  <summary><strong>Guiding Principles</strong></summary>

- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each versions is displayed.
- Mention whether you follow Semantic Versioning.

</details>

<details>
  <summary><strong>Types of changes</strong></summary>

Changelog entries are classified using the following labels _(from [keep-a-changelog](http://keepachangelog.com/)_):

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

</details>


## [2.0.0] - 2017-10-13

### Removed

- No longer wrapped in UMD code since it should be added by implementations.

### Added

- Now throws a `TypeError` when the first argument is not an object.

### Misc

- Add `.verb.md` template to generate readme documentation
- update bower.json

## [1.2.0] - 2017-10-13

- Merge pull request #9 from stellard/rename_on_value
- Supports renaming a key based on the value

## [1.1.3] - 2017-04-03

- Merge pull request #8 from S4RB/master
- Fixes `hasOwnProperty` error when input does not inherit from Object.create

## [1.1.0] - 2015-01-20

- add check for function, simplify

## [1.0.0] - 2015-01-20

- Merge pull request #5 from palanik/master

## [0.1.0] - 2014-02-10

- first commit

[1.2.0]: https://github.com/jonschlinkert/rename-keys/compare/v1.1.3...v1.2.0
[1.1.3]: https://github.com/jonschlinkert/rename-keys/compare/v1.1.0...v1.1.3
[1.1.0]: https://github.com/jonschlinkert/rename-keys/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/jonschlinkert/rename-keys/compare/v0.1.0...v1.0.0
[keep-a-changelog]: https://github.com/olivierlacan/keep-a-changelog


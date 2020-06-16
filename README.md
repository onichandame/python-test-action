# python-test-action

Github action that tests python package. Currently only works with [unittest](https://docs.python.org/3.8/library/unittest.html) and Python 3.

# Author

[onichandame](https://github.com/onichandame)

# Pre-requisite

1. This action assumes that a comprehensive dependency list exists in the project. The location of such list can be specified with parameters.

# Usage

## Basic

edit `.github/workflows/python-test.yml`

add content:

```yaml
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Prepare repo
        uses: actions/checkout@master
      - name: Test
        uses: onichandame/python-test-action@master
```

## Advanced

If some customization is required, several parameters can be added.

```yaml
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: actions/setup-python@v2
        with:
          python-version: '3.8'
      - name: Test
        uses: onichandame/python-test-action@master
        with:
          deps_list: 'requirement'
```

- **deps_list**: the dependency list. default to requirements.txt

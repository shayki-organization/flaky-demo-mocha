# flaky-demo-mocha

Demo repository for exercising a flaky-test detector against GitHub Actions logs (Mocha).

- `test/queue.test.js` contains stable tests plus two intentionally flaky tests
  (`flaky: ...`) that fail with ~40% probability per run.
- `.github/workflows/tests.yml` (`Tests` → `unit-tests`) runs mocha with the default
  spec reporter (`N failing`, numbered failures) on every push.

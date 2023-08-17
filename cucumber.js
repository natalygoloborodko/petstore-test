features = 'src/tests/**/*.feature';

common = `--require src/steps/**/*.ts
  --require src/**/*.ts
  --require tests.setup.ts
  --require-module ts-node/register
  --format html:cucumber.html
  --backtrace true`

  module.exports = {
    default: `'--publish-quiet' ${common} ${features}`,
  };
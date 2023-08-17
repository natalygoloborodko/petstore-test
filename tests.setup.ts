import { Before, After} from '@cucumber/cucumber';
import { contextHolder } from './src/services/context-holder';

Before(async () => {
  resetContextHolder()
});

After(async () => {
  resetContextHolder()
});

function resetContextHolder() {
  for (const contextHolderKey in contextHolder) {
    if (Array.isArray(contextHolder[contextHolderKey])) {
      contextHolder[contextHolderKey] = [];
    } else {
      contextHolder[contextHolderKey] = undefined;
    }
  }
}
import { router } from '../trpc';
import { conversations } from './conversations';
import { folders } from './folders';
import { models } from './models';
import { prompts } from './prompts';
import { settings } from './settings';

export const appRouter = router({
  models,
  settings,
  prompts,
  folders,
  conversations,
});

// export type definition of API
export type AppRouter = typeof appRouter;

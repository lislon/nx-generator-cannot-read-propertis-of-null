import type {PluginBuild} from 'esbuild';
export default function esbuildMyPlugin(): {
  name: string;
  setup(build: PluginBuild): void;
};

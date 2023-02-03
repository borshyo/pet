import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        entry: '',
        build: '',
        html: '',
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('ts', 'tsx');
    // eslint-disable-next-line
    config.module!.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule!.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module?.rules?.push(buildCssLoader(true));
    config.module?.rules?.push(buildSvgLoader());

    return config;
};

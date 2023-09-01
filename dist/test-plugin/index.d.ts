import { BasePlugin } from "../core/plugin/index.js";
export declare class TestPlugin extends BasePlugin {
    name: string;
    baseConfig: {
        server: string;
    };
    run(): void;
}
export default function plugin(): BasePlugin;

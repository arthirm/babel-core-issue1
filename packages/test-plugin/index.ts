import { BasePlugin } from "../core/plugin/index.js";
import { BaseConfig } from "../core/index.js";

export class TestPlugin extends BasePlugin {
  name = "test-plugin";

  baseConfig = {
    server: "localhost"
  }

  run(): void {
    console.log("Running test plugin");
  }
}

export default function plugin(): BasePlugin {
  return new TestPlugin();
}
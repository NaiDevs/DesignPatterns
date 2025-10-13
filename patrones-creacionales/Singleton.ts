class ConfigManager {
    private static instance: ConfigManager;
    private config: Record<string, any> = {};

    private constructor() { }

    static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    set(key: string, value: any) {
        this.config[key] = value;
    }

    get(key: string) {
        return this.config[key];
    }
}

const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.set("apiUrl", "https://api.example.com/");
console.info("TEST SINGLETON")
console.log(config2.get("apiUrl"))
console.log(config1 === config2)
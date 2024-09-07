export default 
{
    "minecraft_version": "1.20.4", // supports up to 1.20.4
    "host": "192.168.60.240", // or "localhost", "your.ip.address.here"
    "port": 24012,
    "auth": "microsoft", // or "microsoft or offline"
    
    "profiles": [
        "./profiles/TurboAI.json",
        // add more profiles here, check ./profiles/ for more
        // more than 1 profile will require you to /msg each bot indivually
    ],
    "load_memory": true, // load memory from previous session
    "init_message": "Say hello world and your name", // sends to all on spawn
    "allow_insecure_coding": true, // disable at own risk
    "code_timeout_mins": 10, // -1 for no timeout
}
const { getUserActivity } = require("./services/githubService");

async function main() {
    const username = process.argv[2];
    if (!username) {
        console.error("Provide a GitHub Username");
        process.exit(1);
    }
    const activity = await getUserActivity(username);
    for (const event of activity) {
        console.log(`- ${event.type} in ${event.repo.name}`);
    }
}

main();
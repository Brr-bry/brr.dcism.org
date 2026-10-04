const GITHUB_USERNAME = "Brr-bry";

export async function getRepositories() {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc&per_page=100`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GitHub repositories");
    }

    return response.json();
}

export async function getReadme(owner, repo) {
    const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`
    );

    if (!response.ok) {
        return "";
    }

    const data = await response.json();

    // GitHub returns README content as Base64
    const decoded = atob(data.content.replace(/\n/g, ""));

    return decoded;
}
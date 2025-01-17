const config = {
	branches: ['main'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/git',
			{
				message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
			},
		],
        "@semantic-release/npm",
		'@semantic-release/github',
        "@semantic-release/changelog",
	],
};

module.exports = config;

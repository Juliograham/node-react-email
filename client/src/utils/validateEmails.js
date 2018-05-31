export default (emails) => {
	const emailsArray = emails.split(',')
	.map(email => email.trim());
};
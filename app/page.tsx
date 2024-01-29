export default function Home() {
    return (
        <div style={{
            margin: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            lineHeight: '1.6',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh'
        }}>
            <h2 style={{ fontWeight: '300', fontSize: '1.5rem', marginBottom: '20px' }}>Welcome future developers, data scientists, and software engineers to the CUNY Software Engineering Club at Hunter College!</h2>
            <p style={{ marginBottom: '15px' }}>
                If you are interested in building cool, deployable projects on Github, please consider filling out this form. We're looking for members who are passionate about technology and innovation.
            </p>

            <p style={{ marginBottom: '15px' }}>
                Be sure to join our <a href="https://discord.gg/5CKMxZu2" target="_blank" style={{ textDecoration: 'none', color: 'blue' }}>Discord server</a> to stay updated and connect with other club members. If you have ideas for the club or are interested in leadership positions, feel free to send us a DM on Discord.
            </p>

            <p style={{ marginBottom: '20px' }}>
                Our meetings are planned for Fridays at 5pm. We look forward to seeing you there!
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSevPq1rjR82iF58V25hKz3R5758lzBZnXsswktcp0OrLzuUiA/viewform" target="_blank">
                <button style={{ backgroundColor: '#007bff', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}>
                    Join
                </button>
            </a>
        </div>
    );
}

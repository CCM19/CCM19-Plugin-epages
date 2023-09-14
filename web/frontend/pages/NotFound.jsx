import React from 'react';

export default function NotFound() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.content}>
                    <h1 style={styles.heading}>There is no page at this address</h1>
                    <p style={styles.text}>
                        Check the URL and try again, or use the search bar to find what you
                        need.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    card: {
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        padding: '20px',
        textAlign: 'center',
    },
    imageContainer: {
        marginBottom: '20px',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
    },
    content: {
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
    },
};

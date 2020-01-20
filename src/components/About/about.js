import React from 'react';
import './about.styles.scss';

const About = () => (
    <div className="about">
        <h1>About</h1>

        <p>This app was created to preview Markdown before uploading it to GitHub's readme.md or whatever service you are using.</p>
        <p>It was created with a library called "markdown-react-js", which can be found here: <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/markdown-react-js">https://www.npmjs.com/package/markdown-react-js</a> </p>

        <div className="whoami">
            <p>Made by <strong>Agustin Sepulveda</strong> </p>
            <p>You can find me here:</p>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AguuSz">
                <i class="fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/agus.sepulveda02">
                <i class="fab fa-instagram"></i>
            </a>

        </div>

    </div>
)

export default About;
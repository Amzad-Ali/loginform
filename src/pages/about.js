import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (
        <section className="about section">
            <h2 className="section__title">
                My Personal <br />
                Information
            </h2>
            <div className="about__container about__page container grid">
                <div className="about__perfil perfil">
                    <div className="perfil__content">
                        <img src="https://images.unsplash.com/photo-1494354145959-25cb82edf23d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NzIyMTl8&ixlib=rb-4.0.3&q=85" alt="image" className="perfil__img" />
                    </div>
                </div>
                <div className="about__content grid">
                    <div className="about__data grid">
                        <div className="about__info grid">
                            <h1 className="about__name">Liz Delz</h1>
                            <h2 className="about__profession">Web &amp; Visual Designer</h2>
                            <p className="about__description">
                                Passionate about creating <b>Web Pages</b> with
                                <b>UI/UX User Interface</b>, I have years of
                                experience and many clients are happy with
                                the projects carried out.
                            </p>
                        </div>
                        <Link to="contact" className="about__button button">Contact Me</Link>
                    </div>
                    <div className="about__skills">
                        <h3 className="about__skills-title">My Skills Are</h3>
                        <div className="about__skills-content grid">
                            <div className="about__skills-img">
                                {/* HTML */}
                                <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="image HTML" className="about__skills-img" />
                                <p className="about__skills-hover-text">HTML</p>
                            </div>
                            <div className="about__skills-img">
                                {/* CSS */}
                                <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="image CSS" className="about__skills-img" />
                                <p className="about__skills-hover-text">CSS</p>
                            </div>
                            <div className="about__skills-img">
                                {/* JavaScript */}
                                <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="image JavaScript" className="about__skills-img" />
                                <p className="about__skills-hover-text">JavaScript</p>
                            </div>
                            <div className="about__skills-img">
                                {/* SASS */}
                                <img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" alt="image SASS" className="about__skills-img" />
                                <p className="about__skills-hover-text">SASS</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Node.js */}
                                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="image Node.js" className="about__skills-img" />
                                <p className="about__skills-hover-text">Node.js</p>
                            </div>
                            <div className="about__skills-img">
                                {/* React */}
                                <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="image React" className="about__skills-img" />
                                <p className="about__skills-hover-text">React</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Redux */}
                                <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="image Redux" className="about__skills-img" />
                                <p className="about__skills-hover-text">Redux</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Git */}
                                <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="image Git" className="about__skills-img" />
                                <p className="about__skills-hover-text">Git</p>
                            </div>
                            <div className="about__skills-img">
                                {/* GitHub */}
                                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="image GitHub" className="about__skills-img" />
                                <p className="about__skills-hover-text">GitHub</p>
                            </div>
                            <div className="about__skills-img">
                                {/* CodePen */}
                                <img src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" alt="image CodePen" className="about__skills-img" />
                                <p className="about__skills-hover-text">CodePen</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Figma */}
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="image Figma" className="about__skills-img" />
                                <p className="about__skills-hover-text">Figma</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Windows */}
                                <img src="https://cdn.worldvectorlogo.com/logos/microsoft-windows-11.svg" alt="image Windows" className="about__skills-img" />
                                <p className="about__skills-hover-text">Windows</p>
                            </div>
                            <div className="about__skills-img">
                                {/* macOs */}
                                <img src="https://cdn.worldvectorlogo.com/logos/apple-14.svg" alt="image macOs" className="about__skills-img" />
                                <p className="about__skills-hover-text">macOs</p>
                            </div>
                            <div className="about__skills-img">
                                {/* VSCode */}
                                <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="image VS Code" className="about__skills-img" />
                                <p className="about__skills-hover-text">VSCode</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Notion */}
                                <img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" alt="image Notion" className="about__skills-img" />
                                <p className="about__skills-hover-text">Notion</p>
                            </div>
                            <div className="about__skills-img">
                                {/* Slack */}
                                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="image Slack" className="about__skills-img" />
                                <p className="about__skills-hover-text">Slack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;
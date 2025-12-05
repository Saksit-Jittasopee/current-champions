import "./Home.css";
const Home = ({title}) => {

    return(
        <div class="home">
        <div class="title"><h1>{title}</h1></div>
        <div>
        <h2>About This Page</h2>
        <p>This page was created to show current Wrestling Champions like (WWE, NXT, AEW, etc.) by using React & JavaScript & Vite. This page is monthly updated.</p>
        </div>
        <br/>
        <div>
        <h2>Tech Stack:</h2>
        <ul>
        <li>Build Tool: Vite with React Router</li>
        <li>Language: JavaScript (jsx)</li>
        <li>Styling: Bootstrap CSS</li>
        <li>Bootstrap: <a href="https://getbootstrap.com/docs/5.0/components/card/">Cards Bootstrap v5.0</a></li>
        <li>Icons: React-Icons </li>
        </ul>
        </div>
        <br />
        <div>
        <p>You can click button to show any companies current champions, You can also click to change the theme.</p>
        <p>Thank you for paying attention to my page.</p>
        </div> 
        </div>
    )
}

export default Home;
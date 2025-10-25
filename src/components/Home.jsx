import "./Home.css";
const Home = ({title}) => {

    return(
        <div class="home">
        <h1>{title}</h1>
        <h2>Welcome To My Page.</h2>
        <a href="https://getbootstrap.com/docs/5.0/components/card/"><p>Bootstrap that used in this page</p></a>
        <br />
        <h2>About This Page</h2>
        <p>This page was created to show current Wrestling Champions like (WWE, NXT, AEW, etc.) by using React & Node.js.</p>
        <p>You can click button to show any companies current champions also click to change the theme.</p>
        <br />
        <p>Thank you for paying attention to my page.</p>
        </div>
    )
}

export default Home;
import Navigation from '../layout/navigation';
import '../styles/css/home.css';

const Main = () => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Zen+Dots&display=swap"
        />
      </head>

      <body>
        <div id="bg">
          <nav></nav>
          <h1 id="nasa">SPACE X</h1>
        </div>
        <div id="content">
          <div id="inner">
            <div className="block">
              <a href="/viewCrew">
                <div id="img1"></div>
              </a>
              <h5>ASTRONAUTES</h5>
            </div>
            <div className="block">
              <a href="/rockets">
                <div id="img2"></div>{' '}
              </a>

              <h5>LANCEMENTS</h5>
            </div>
            <div className="block">
              <a href="/articles">
                <div id="img3"></div>
              </a>
              <h5>CHRONOLOGIE</h5>
            </div>
            <div className="block">
              <a href="/about">
                <div id="img4"></div>
              </a>
              <h5>A PROPOS</h5>
            </div>
          </div>
        </div>
        <footer></footer>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
          integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"
          integrity="sha512-wK2NuxEyN/6s53M8G7c6cRUXvkeV8Uh5duYS06pAdLq4ukc72errSIyyGQGYtzWEzvVGzGSWg8l79e0VkTJYPw=="
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default Main;

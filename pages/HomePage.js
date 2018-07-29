import React, {Fragment} from 'react'
import 'styles/styles.sass'

export default () => (
  <Fragment>
    <a href="/" className="logo">
      <div>André</div>
      <div>Antunes</div>
      <div>Vieira</div>
    </a>
    <header>
      <a className="active">Resumé</a>
      <a>Portifólio</a>
      <a>Comunidade</a>
      <a>Início</a>
    </header>

    <section className="splitted-section" id="resume">
      <div>
        <img src="/public/macbook.png" />
      </div>
      <div>
        <h1>Resumé</h1>
        <p>Software developer since 2007, I had worked with IoT, Robotics and Web. Since 2009, my focus is web development.</p>
        <p>Now I am tech lead on front end team, diary work with React, React Native, Node.js (my main skill is JavaScript), Ruby on Rails and Elixir , in addiction to a continuous concern about SEO, performance, continuous delivery, code quality. I also have experience with Vue.js, Swift and PHP and most <br/> important: I really love to learning new things).</p>
        <p>About community, I am manager of react meetups in Porto Alegre and "Me Salva! Dev Talks".</p>
        <p>I really love the startup way to be: Pareto's Law, Continuous Delivery, Innovation, <br/> Metrics to Everywhere, T-profile, <br/>Remote Work...</p>
      </div>
    </section>
  </Fragment>
)

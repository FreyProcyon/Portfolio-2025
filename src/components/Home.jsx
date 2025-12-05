function Home({ onNavigate }) {
    return (
      <section>
        <h1>Hi, I&apos;m Zhuoyang Pei</h1>
        <p>XR / Interaction Designer & Frontend Developer in training.</p>
  
        <button onClick={() => onNavigate('projects')}>
          View my projects
        </button>
      </section>
    )
  }
  
  export default Home
  
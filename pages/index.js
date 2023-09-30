import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Habada Industries</title>
        <meta name="description" content="Forging the Future, the Habada Way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Habada Industries</h1>
        <p>3555 Habada Street, Omaha, NE 68131</p>
        <p>Official Home Page</p>
      </header>
      <main>
        <section className="links-section">
          <div className="column">
            <ul>
              <li>Habada Technology and Innovation Division:
                <ul>
                  <li><a href="#">HabadaTech Solutions Inc. (Information technology services)</a></li>
                  <li><a href="#">Habada NanoTech Innovations (Nanotechnology research and development)</a></li>
                  <li><a href="#">Habada Quantum Systems (Quantum computing and technology solutions)</a></li>
                </ul>
              </li>
              <li>Habada Energy and Utilities Group:
                <ul>
                  <li><a href="#">Habada EcoPower Solutions (Renewable energy generation and storage)</a></li>
                  <li><a href="#">Habada Global Gas & Oil Corporation (Oil and gas exploration and production)</a></li>
                  <li><a href="#">Habada WaterWorks Inc. (Water purification and desalination)</a></li>
                </ul>
              </li>
              <li>Habada Healthcare and Pharmaceuticals:
                <ul>
                  <li><a href="#">Habada MediCare International (Healthcare services and insurance)</a></li>
                  <li><a href="#">Habada PharmaGenix (Pharmaceuticals and biotechnology research)</a></li>
                </ul>
              </li>
              <li>Habada Manufacturing and Industrial:
                <ul>
                  <li><a href="#">Habada Metallix Industries (Steel and metal manufacturing)</a></li>
                  <li><a href="#">Habada PlastiTech Solutions (Plastics and polymers production)</a></li>
                  <li><a href="#">Habada AeroDynamics Ltd. (Aerospace and aviation manufacturing)</a></li>
                </ul>
              </li>
              <li>Habada Financial Services and Investments:
                <ul>
                  <li><a href="#">Habada Global Capital Ventures (Investment and asset management)</a></li>
                  <li><a href="#">Habada Bank & Trust (Banking and financial services)</a></li>
                  <li><a href="#">Habadollars</a></li>
                </ul>
              </li>
              <li>Habada Real Estate and Infrastructure:
                <ul>
                  <li><a href="#">Habada UrbanScape Developments (Real estate development)</a></li>
                  <li><a href="#">Habada Transit Link (Transportation infrastructure and logistics)</a></li>
                </ul>
              </li>

            </ul>
          </div>
          <div class="column">
            <ul>

              <li>Habada Media and Entertainment:
                <ul>
                  <li><a href="#">Habada Studios (Film and television production)</a></li>
                  <li><a href="#">Habada MediaWave Networks (Media distribution and streaming services)</a></li>
                  <li><a href="#">Habada Music Group India</a></li>
                </ul>
              </li>

              <li>Habada Food and Beverage:
                <ul>
                  <li><a href="#">Habada TasteWorld Inc. (Food production and distribution)</a></li>
                  <li><a href="#">Habada Beverage Blenders (Beverage manufacturing)</a></li>
                </ul>
              </li>
              <li>Habada Retail and Consumer Goods:
                <ul>
                  <li><a href="#">Habada ShopGlobal Mall (Online retail platform)</a></li>
                  <li><a href="#">Habada LuxeStyles (High-end fashion and luxury goods)</a></li>
                </ul>
              </li>
              <li>Habada Environmental Solutions:
                <ul>
                  <li><a href="#">Habada GreenEarth Technologies (Environmental consulting and solutions)</a></li>
                  <li><a href="#">Habada RecycleNation (Waste management and recycling)</a></li>
                </ul>
              </li>
              <li>Habada Education and Training:
                <ul>
                  <li><a href="#">Habada EduMasters Institute (Higher education and online learning)</a></li>
                  <li><a href="#">Habada SkillUp Solutions (Professional training and development)</a></li>
                </ul>
              </li>
              <li>Habada Aerospace and Defense:
                <ul>
                  <li><a href="#">Habada AeroDefense Systems (Defense technology and solutions)</a></li>
                  <li><a href="#">Habada Orbital Dynamics (Space exploration and technology)</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <footer>
          <section class="geico-section">
            <img src="geico-logo.png" alt="GEICO logo" />
            <p>FOR A FREE CAR INSURANCE RATE QUOTE THAT COULD SAVE YOU SUBSTANTIAL MONEY</p>
            <p><a href="https://www.geico.com" target="_blank">WWW.GEICO.COM</a> OR CALL 1-888-395-6349, 24 HOURS A DAY</p>
          </section>
        </footer>
      </main>
      <footer>
        <p>Comments to <a href="mailto:webmaster@habada.com">webmaster@habada.com</a></p>
        <p>Copyright © 2023 Habada Industries</p>
          <a href="#"><p>Legal Disclaimer</p></a>
          <a href="#"><p>Investors</p></a>
          <a href="#"><p>Careers</p></a>
      </footer>
    </>
  )
}



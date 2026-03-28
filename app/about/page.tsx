import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MindSpring Academy - About",
  description: "Blending tradition with modern innovation, our school prepares students to excel and thrive in a dynamic global world.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="hero">
        <div className="container container-grow">
          <div className="hero-content internal-hero-content">
            <div className="hero-media-content">
              <div className="hero-main-image">
                <Image
                  src="/images/pexels-zachtheshoota-1838640_1pexels-zachtheshoota-1838640.avif"
                  alt="A school building stands against the backdrop of a clear sky"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>
            <div className="hero-main-content">
              <div className="hero-text-content">
                <div className="hero-text-wrapper">
                  <h1 className="h1">A Tradition of Innovation and Lifelong Learning</h1>
                  <p className="regular-m max-width-440">Blending tradition and modern innovation, our school prepares students to excel and thrive in a global world.</p>
                </div>
              </div>
              <div className="hero-main-media">
                <div className="hero-images">
                  <div className="hero-image">
                    <Image
                      src="/images/pexels-max-fischer-5211478_1pexels-max-fischer-5211478.avif"
                      alt="A student stands with a backpack on, ready for school"
                      fill
                      className="absolute-image"
                    />
                  </div>
                  <div className="hero-image">
                    <Image
                      src="/images/pexels-olia-danilevich-5088188_1pexels-olia-danilevich-5088188.avif"
                      alt="Two cheerful students are balancing books on their heads"
                      fill
                      className="absolute-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Motto Section */}
      <section className="section">
        <div className="container">
          <div className="motto">
            <div className="motto-content">
              <div className="serif-m">The Motto</div>
              <h2 className="h2">{`"Igniting Each Student's Potential, Cultivating Excellence in Every Aspect, and Shaping Bright Futures Together"`}</h2>
            </div>
            <div className="regular-s">MindSpring Academy</div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section">
        <div className="container">
          <div className="story-blocks-wrapper">
            <div className="story-block">
              <div className="story-block-image">
                <Image
                  src="/images/pexels-alexander-mass-748453803-27872051_1pexels-alexander-mass-748453803-27872051.avif"
                  alt="An old wooden desk in a vintage classroom setting"
                  fill
                  className="absolute-image"
                />
              </div>
              <div className="story-block-content">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">Foundation</div>
                </div>
                <div className="story-main">
                  <div className="large-value">1980</div>
                  <h3 className="h3">Laying the Foundations</h3>
                </div>
                <div className="story-description">
                  <p className="regular-m max-width-440">Our school began with a bold vision to provide exceptional education and foster community values. This foundational period set the stage for our enduring legacy.</p>
                </div>
              </div>
            </div>

            <div className="story-block reversed-story-block">
              <div className="story-block-content">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">New Horizons</div>
                </div>
                <div className="story-main">
                  <div className="large-value">1991</div>
                  <h3 className="h3">Growth and Expansion</h3>
                </div>
                <div className="story-description">
                  <p className="regular-m max-width-440">As we grew, we focused on upgrading facilities, expanding programs, and enhancing educational offerings to reach a broader and more diverse student body.</p>
                </div>
              </div>
              <div className="story-block-image">
                <Image
                  src="/images/pexels-elizaveta-rukhtina-126286959-10012769_1pexels-elizaveta-rukhtina-126286959-10012769.avif"
                  alt="A vintage school bus is driving down the road"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>

            <div className="story-block">
              <div className="story-block-image">
                <Image
                  src="/images/pexels-rdne-8500643_1pexels-rdne-8500643.avif"
                  alt="A modern classroom with sleek furniture"
                  fill
                  className="absolute-image"
                />
              </div>
              <div className="story-block-content">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">New Methods</div>
                </div>
                <div className="story-main">
                  <div className="large-value">2006</div>
                  <h3 className="h3">Modernization and Innovation</h3>
                </div>
                <div className="story-description">
                  <p className="regular-m max-width-440">Embracing modern technology and innovative teaching methods, this period marked a transformation in how we deliver education and support student success.</p>
                </div>
              </div>
            </div>

            <div className="story-block reversed-story-block">
              <div className="story-block-content">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">Leading the Way</div>
                </div>
                <div className="story-main">
                  <div className="large-value">2020</div>
                  <h3 className="h3">Excellence and Legacy</h3>
                </div>
                <div className="story-description">
                  <p className="regular-m max-width-440">Our current focus is on maintaining excellence in education while honoring our rich traditions, ensuring we continue to shape the future of our students.</p>
                </div>
              </div>
              <div className="story-block-image">
                <Image
                  src="/images/pexels-max-fischer-5212667-1_1pexels-max-fischer-5212667.avif"
                  alt="A teacher stands in the middle of the classroom"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="colored-section bg-color-primary-dark">
            <div className="flex-center-wrapper">
              <div className="colored-section-stack">
                <div className="section-heading-block">
                  <div className="center-section-heading">
                    <div className="chips">
                      <div className="chips-shape bg-color-primary"></div>
                      <div className="serif-xs">Our Values</div>
                    </div>
                    <h2 className="h2">The Cornerstones of Our Commitment to a Brighter Future</h2>
                  </div>
                </div>
                <div className="content-blocks-wrapper">
                  <div className="descriptive-blocks">
                    <div className="descriptive-block">
                      <h3 className="h3 color-grey">Mission</h3>
                      <p className="regular-m">{`Our mission is to provide an inspiring and inclusive learning environment that nurtures every student's potential. We strive to cultivate academic excellence, personal growth, and a commitment to lifelong learning, empowering students to become leaders and positive contributors to society.`}</p>
                    </div>
                    <div className="descriptive-block">
                      <h3 className="h3 color-grey">Vision</h3>
                      <p className="regular-m">Our vision is to be a leading educational institution recognized for innovation, inclusivity, and academic excellence. We aim to shape future generations of confident, compassionate, and critical thinkers who will make meaningful impacts in an ever-evolving world.</p>
                    </div>
                    <div className="descriptive-block">
                      <h3 className="h3 color-grey">Values</h3>
                      <div className="descriptive-block-content">
                        <p className="regular-m">We are committed to fostering a culture of excellence, integrity, inclusivity, innovation, and community. These core values guide our approach to education and shape our efforts to inspire, support, and empower every student.</p>
                        <div className="two-columns-border-info-blocks">
                          <div className="border-info-block">
                            <div className="serif-m">Excellence</div>
                            <p className="regular-s max-width-216">We pursue excellence, inspiring students to reach their potential.</p>
                          </div>
                          <div className="border-info-block">
                            <div className="serif-m">Integrity</div>
                            <p className="regular-s max-width-216">We value honesty, responsibility, and moral principles in all we do.</p>
                          </div>
                          <div className="border-info-block">
                            <div className="serif-m">Inclusivity</div>
                            <p className="regular-s max-width-216">We celebrate diversity, ensuring everyone feels respected.</p>
                          </div>
                          <div className="border-info-block">
                            <div className="serif-m">Innovation</div>
                            <p className="regular-s max-width-216">We embrace creativity and innovation to prepare students.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="button secondary-button">
                  <div className="button-text-wrapper">
                    <span className="button-text serif-l">Contact Us</span>
                    <span className="button-text serif-l bottom-absolute-text">Contact Us</span>
                  </div>
                  <div className="button-background bg-color-primary"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section">
        <div className="container">
          <div className="section-stack">
            <div className="section-heading-block">
              <div className="center-section-heading">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">Leadership</div>
                </div>
                <h2 className="h2">Guiding Excellence and Inspiring Growth</h2>
              </div>
            </div>
            <div className="leadership-blocks-grid">
              <div className="leadership-block first-block">
                <div className="leadership-block-info">
                  <div className="leadership-block-main-info">
                    <div className="serif-m">Dr. Emily Roberts</div>
                    <div className="regular-s color-dark-grey">School Principal</div>
                  </div>
                  <div className="leadership-block-stats-wrapper">
                    <div className="leadership-block-stats">
                      <div className="serif-l">12+</div>
                      <p className="regular-s">Years in leadership</p>
                    </div>
                    <div className="leadership-block-stats">
                      <div className="serif-l">5</div>
                      <p className="regular-s">Academic Programs</p>
                    </div>
                    <div className="leadership-block-stats">
                      <div className="serif-l">8</div>
                      <p className="regular-s">School Initiatives</p>
                    </div>
                    <div className="leadership-block-stats">
                      <div className="serif-l">10+</div>
                      <p className="regular-s">Innovative Strategies</p>
                    </div>
                  </div>
                  <div className="leadership-block-description">
                    <p className="regular-s">With over 12 years in educational leadership, Dr. Roberts fosters a thriving environment for students and staff through innovation and a strong commitment to excellence.</p>
                  </div>
                </div>
                <div className="leadership-block-image">
                  <Image
                    src="/images/Dr.-Emily-Roberts.avif"
                    alt="Dr. Emily Roberts"
                    fill
                    className="absolute-image"
                  />
                </div>
              </div>
              <div className="leadership-block">
                <div className="leadership-block-info">
                  <div className="leadership-block-main-info">
                    <div className="serif-m">Ms. Sarah Thompson</div>
                    <div className="regular-s color-dark-grey">Head of Curriculum</div>
                  </div>
                  <div className="leadership-block-description">
                    <p className="regular-s">Dedicated to curriculum innovation with 10 years of experience, Ms. Thompson continuously integrates new teaching strategies to enhance student learning outcomes.</p>
                  </div>
                </div>
                <div className="leadership-block-image">
                  <Image
                    src="/images/Ms.-Sarah-Thompson.avif"
                    alt="Ms. Sarah Thompson"
                    fill
                    className="absolute-image"
                  />
                </div>
              </div>
              <div className="leadership-block">
                <div className="leadership-block-info">
                  <div className="leadership-block-main-info">
                    <div className="serif-m">Mr. Jonathan Lee</div>
                    <div className="regular-s color-dark-grey">Director of Admissions</div>
                  </div>
                  <div className="leadership-block-description">
                    <p className="regular-s">Mr. Lee leads our admissions team with passion, guiding families through the enrollment process and building strong community connections for over 8 years.</p>
                  </div>
                </div>
                <div className="leadership-block-image">
                  <Image
                    src="/images/Mr.-Jonathan-Lee.avif"
                    alt="Mr. Jonathan Lee"
                    fill
                    className="absolute-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

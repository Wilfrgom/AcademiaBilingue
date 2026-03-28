import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MindSpring Academy - Academics",
  description: "Unlock your potential at MindSpring Academy. Discover a supportive environment where every student's strengths are nurtured.",
};

export default function AcademicsPage() {
  return (
    <>
      <Navigation />
      <main className="hero">
        <div className="container container-grow">
          <div className="hero-content internal-hero-content">
            <div className="hero-media-content">
              <div className="hero-main-image">
                <Image
                  src="/images/pexels-max-fischer-5212339_1pexels-max-fischer-5212339.avif"
                  alt="A teacher is explaining a topic"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>
            <div className="hero-main-content">
              <div className="hero-text-content text-content-grow">
                <div className="hero-text-wrapper">
                  <h1 className="h1">Unlock Your Academic Potential</h1>
                </div>
              </div>
              <div className="icon-link-blocks-grid">
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Notebook.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Library Services</div>
                      <p className="regular-s">Access to books and academic journals.</p>
                    </div>
                  </div>
                  <Link href="#" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Explore Library</span>
                      <span className="button-text regular-s bottom-absolute-text">Explore Library</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Edit.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Tutoring Services</div>
                      <p className="regular-s">Homework help and exam preparation.</p>
                    </div>
                  </div>
                  <Link href="#" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Get Help</span>
                      <span className="button-text regular-s bottom-absolute-text">Get Help</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Laptop.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Technology Resources</div>
                      <p className="regular-s">Access to educational technologies.</p>
                    </div>
                  </div>
                  <Link href="#" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Access Resources</span>
                      <span className="button-text regular-s bottom-absolute-text">Access Resources</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Chart-Network.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Learning Platforms</div>
                      <p className="regular-s">Interactive tools for digital learning.</p>
                    </div>
                  </div>
                  <Link href="#" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Explore Platforms</span>
                      <span className="button-text regular-s bottom-absolute-text">Explore Platforms</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Curriculum Section */}
      <section className="section">
        <div className="container">
          <div className="colored-section bg-color-primary">
            <div className="flex-center-wrapper">
              <div className="colored-section-stack">
                <div className="section-heading-block">
                  <div className="center-section-heading">
                    <div className="chips">
                      <div className="chips-shape bg-color-primary"></div>
                      <div className="serif-xs">Curriculum</div>
                    </div>
                    <h2 className="h2">{`Unlocking Students' Learning Potential`}</h2>
                  </div>
                </div>
                <div className="block-divider">
                  <div className="serif-m">Programs</div>
                </div>
                <div className="two-blocks-grid">
                  <div className="left-icon-block">
                    <Image src="/images/Idea.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Advanced Placement</h3>
                      <p className="regular-s">High-achieving students tackle college-level coursework to earn credits and prepare for higher education.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Task.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">STEM Program</h3>
                      <p className="regular-s">This Program emphasizes project-based learning and hands-on activities to boost problem-solving skills.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Color-Palette.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Arts &amp; Humanities</h3>
                      <p className="regular-s">This program fosters creativity and critical thinking through arts, music, drama, literature, and history.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Peoples.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Leadership Development</h3>
                      <p className="regular-s">Students build leadership skills and engage in community service, learning responsibility and empathy.</p>
                    </div>
                  </div>
                </div>
                <div className="block-divider">
                  <div className="serif-m">Subjects</div>
                </div>
                <div className="two-blocks-grid">
                  <div className="left-icon-block">
                    <Image src="/images/Calculator.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Mathematics</h3>
                      <p className="regular-s">From arithmetic to calculus, our math curriculum builds essential problem-solving and analytical skills.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Share.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Science</h3>
                      <p className="regular-s">Experiments in biology, chemistry, physics, and science enhance understanding of the natural world.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Image.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Language Arts</h3>
                      <p className="regular-s">Focus on reading, writing, and communication to enhance literacy and critical thinking through public speaking.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Group.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Social Studies</h3>
                      <p className="regular-s">Explore history, geography, economics, and civics to build global awareness and informed citizenship.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Translate.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Foreign Languages</h3>
                      <p className="regular-s">Learn Spanish, French, and Mandarin to develop language skills and cross-cultural communication.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Bicycle.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Physical Education</h3>
                      <p className="regular-s">Our PE program promotes fitness, teamwork, and lifelong healthy habits for student development.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Chip.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Computer Science</h3>
                      <p className="regular-s">Acquire key tech skills in coding, web development, and digital media to prepare for future careers.</p>
                    </div>
                  </div>
                  <div className="left-icon-block">
                    <Image src="/images/Paint-Brush.svg" alt="" width={32} height={32} className="icon-size-32-tablet-28-mobile-24" />
                    <div className="left-icon-block-text">
                      <h3 className="h3">Fine Arts</h3>
                      <p className="regular-s">Express creativity and appreciate artistic disciplines through music, visual arts, and performing arts.</p>
                    </div>
                  </div>
                </div>
                <Link href="/admissions" className="button secondary-button">
                  <div className="button-text-wrapper">
                    <span className="button-text serif-l">Discover Admissions</span>
                    <span className="button-text serif-l bottom-absolute-text">Discover Admissions</span>
                  </div>
                  <div className="button-background bg-color-primary"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="section">
        <div className="container">
          <div className="section-stack">
            <div className="section-heading-block">
              <div className="center-section-heading">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">Stages</div>
                </div>
                <h2 className="h2">Grade Levels and Programs Overview</h2>
              </div>
            </div>
            <div className="stage-blocks-wrapper">
              <div className="stage-block">
                <div className="stage-block-content primary-stage-block">
                  <div className="serif-l">01</div>
                  <div className="stage-block-main-content">
                    <div className="serif-m">Grades K-5 (Ages 5-11)</div>
                    <div className="serif-xl">Elementary<br />School</div>
                  </div>
                  <div className="regular-s max-width-400">This program builds foundational skills in reading, writing, and math, while nurturing curiosity and creativity through a broad curriculum that includes science, social studies, and the arts.</div>
                </div>
                <div className="stage-block-image">
                  <Image
                    src="/images/pexels-gustavo-fring-5621918_1pexels-gustavo-fring-5621918.avif"
                    alt="Children are sitting on the grass, reading a book together"
                    fill
                    className="absolute-image"
                  />
                </div>
              </div>
              <div className="stage-block reversed-stage-block">
                <div className="stage-block-content yellow-stage-block">
                  <div className="serif-l">02</div>
                  <div className="stage-block-main-content">
                    <div className="serif-m">Grades 6-8 (Ages 12-14)</div>
                    <div className="serif-xl">Middle<br />School</div>
                  </div>
                  <div className="regular-s max-width-400">Middle School students tackle more complex subjects and electives, focusing on critical thinking, problem-solving, and social skills to prepare effectively for high school.</div>
                </div>
                <div className="stage-block-image">
                  <Image
                    src="/images/pexels-julia-m-cameron-4144102_1pexels-julia-m-cameron-4144102.avif"
                    alt="A student wearing a yellow t-shirt sits with a calm expression"
                    fill
                    className="absolute-image"
                  />
                </div>
              </div>
              <div className="stage-block">
                <div className="stage-block-content red-stage-block">
                  <div className="serif-l">03</div>
                  <div className="stage-block-main-content">
                    <div className="serif-m">Grades 9-12 (Ages 15-18)</div>
                    <div className="serif-xl">High<br />School</div>
                  </div>
                  <div className="regular-s max-width-400">High School offers AP courses, electives, and career prep. Students are guided through college prep, exploring interests, and achieving academic excellence.</div>
                </div>
                <div className="stage-block-image">
                  <Image
                    src="/images/pexels-max-fischer-5212347.avif"
                    alt="A student is raising their hand in class"
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

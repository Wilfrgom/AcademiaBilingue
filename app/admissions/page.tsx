import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MindSpring Academy - Admissions",
  description: "Discover our admissions process and take the first step toward an exciting educational journey with us.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Navigation />
      <main className="hero">
        <div className="container container-grow">
          <div className="hero-content internal-hero-content">
            <div className="hero-media-content">
              <div className="hero-main-image">
                <Image
                  src="/images/pexels-max-fischer-5212697_1pexels-max-fischer-5212697.avif"
                  alt="Students are seated in a classroom, focusing on their work"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>
            <div className="hero-main-content">
              <div className="hero-text-content">
                <div className="hero-text-wrapper">
                  <h1 className="h1">Start Your Adventure in Education</h1>
                  <p className="regular-m max-width-440">Learn more about our admissions process and how you can embark on an exciting educational journey with us.</p>
                </div>
              </div>
              <div className="hero-main-media">
                <div className="hero-images">
                  <div className="hero-image">
                    <Image
                      src="/images/pexels-artempodrez-6990434_1pexels-artempodrez-6990434.avif"
                      alt="A teacher is showing a globe to a student"
                      fill
                      className="absolute-image"
                    />
                  </div>
                  <div className="hero-image">
                    <Image
                      src="/images/pexels-yankrukov-8617819_1pexels-yankrukov-8617819.avif"
                      alt="A teacher is explaining a concept to the students"
                      fill
                      className="absolute-image"
                    />
                  </div>
                </div>
                <div className="button-wrapper">
                  <Link href="https://www.google.com/forms/about/" target="_blank" className="button primary-button">
                    <div className="button-text-wrapper">
                      <span className="button-text serif-l">Enroll Today</span>
                      <span className="button-text serif-l bottom-absolute-text">Enroll Today</span>
                    </div>
                    <div className="button-background bg-color-primary-light"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="process-blocks-content">
            <div className="process-blocks-wrapper">
              <div className="process-block">
                <div className="large-value">01</div>
                <div className="process-block-text">
                  <h2 className="h2 max-width-280-tablet-240-mobile-200">Start Your Application</h2>
                  <p className="regular-s">{`Submit basic information about your child and family through our application process. We'll guide you through the next steps.`}</p>
                </div>
              </div>
              <div className="process-block">
                <div className="large-value">02</div>
                <div className="process-block-text">
                  <h2 className="h2 max-width-280-tablet-240-mobile-200">Submit Documents</h2>
                  <p className="regular-s">Submit report cards or transcripts, proof of residency, immunization records and a birth certificate.</p>
                </div>
              </div>
              <div className="process-block">
                <div className="large-value">03</div>
                <div className="process-block-text">
                  <h2 className="h2 max-width-280-tablet-240-mobile-200">Schedule an Interview</h2>
                  <p className="regular-s">{`After reviewing your application, we'll schedule an interview with our team to discuss your child and answer any questions.`}</p>
                </div>
              </div>
              <div className="process-block">
                <div className="large-value">04</div>
                <div className="process-block-text">
                  <h2 className="h2 max-width-280-tablet-240-mobile-200">Attend the School Tour</h2>
                  <p className="regular-s">Participate in a school tour to explore our facilities and meet our faculty. This is an opportunity to experience our environment.</p>
                </div>
              </div>
              <div className="process-block">
                <div className="large-value">05</div>
                <div className="process-block-text">
                  <h2 className="h2 max-width-280-tablet-240-mobile-200">Review and Decision</h2>
                  <p className="regular-s">After our admissions committee will review your application, you will be notified of the decision by the specified deadline.</p>
                </div>
              </div>
              <div className="process-block">
                <div className="large-value">06</div>
                <div className="process-block-text">
                  <h2 className="h2 max-width-280-tablet-240-mobile-200">Enrollment &amp; Confirmation</h2>
                  <p className="regular-s">If accepted, complete the enrollment paperwork and receive details on orientation and the start date for your child.</p>
                </div>
              </div>
            </div>
            <div className="process-image">
              <Image
                src="/images/pexels-polina-tankilevitch-6929186_1pexels-polina-tankilevitch-6929186.avif"
                alt="A student is writing in a notebook, concentrating on her work"
                fill
                className="absolute-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section">
        <div className="container">
          <div className="section-stack">
            <div className="section-heading-block">
              <div className="center-section-heading">
                <div className="chips">
                  <div className="chips-shape bg-color-primary"></div>
                  <div className="serif-xs">Requirements</div>
                </div>
                <h2 className="h2">Enrollment Requirements</h2>
              </div>
            </div>
            <div className="wrapper">
              <div className="requirements-grid">
                <div className="requirement-type primary-requirement-block">
                  <div className="serif-l">Elementary<br />School</div>
                </div>
                <div className="criteria-block color-primary-dark">
                  <div className="serif-xl">5 y.o.</div>
                  <div className="serif-m">Min. Age for Elementary School</div>
                </div>
                <div className="criteria-block color-primary-dark">
                  <div className="serif-xl">3.5+</div>
                  <div className="serif-m">Standardized Interview Scores</div>
                </div>
              </div>
              <div className="requirements-grid">
                <div className="requirement-type yellow-requirement-block">
                  <div className="serif-l">Middle<br />School</div>
                </div>
                <div className="criteria-block color-yellow-dark">
                  <div className="serif-xl">12 y.o.</div>
                  <div className="serif-m">Min. Age for Middle School</div>
                </div>
                <div className="criteria-block color-yellow-dark">
                  <div className="serif-xl">2.9+</div>
                  <div className="serif-m">Minimum GPA</div>
                </div>
              </div>
              <div className="requirements-grid">
                <div className="requirement-type red-requirement-block">
                  <div className="serif-l">High<br />School</div>
                </div>
                <div className="criteria-block color-red-dark">
                  <div className="serif-xl">15 y.o.</div>
                  <div className="serif-m">Min. Age for High School</div>
                </div>
                <div className="criteria-block color-red-dark">
                  <div className="serif-xl">3.2+</div>
                  <div className="serif-m">Minimum GPA</div>
                </div>
                <div className="criteria-block color-red-dark">
                  <div className="serif-xl">1000+</div>
                  <div className="serif-m">Minimum Score on SAT</div>
                </div>
                <div className="criteria-block color-red-dark">
                  <div className="serif-xl">4.1+</div>
                  <div className="serif-m">Personal Interview Score</div>
                </div>
              </div>
            </div>
            <Link href="https://www.google.com/forms/about/" target="_blank" className="button secondary-button">
              <div className="button-text-wrapper">
                <span className="button-text serif-l">Enroll Today</span>
                <span className="button-text serif-l bottom-absolute-text">Enroll Today</span>
              </div>
              <div className="button-background bg-color-primary"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="colored-section bg-color-primary-dark">
            <div className="flex-center-wrapper">
              <div className="colored-section-stack">
                <div className="section-heading-block">
                  <div className="center-section-heading">
                    <div className="chips">
                      <div className="chips-shape bg-color-primary"></div>
                      <div className="serif-xs">FAQ</div>
                    </div>
                    <h2 className="h2">In-Depth Responses to Your Questions</h2>
                  </div>
                </div>
                <div className="content-blocks-wrapper">
                  <div className="faq-wrapper">
                    <div className="faq-item">
                      <div className="faq-question-wrapper">
                        <div className="faq-question-content">
                          <div className="serif-m faq-question">{`What are the school's admission requirements?`}</div>
                          <div className="faq-question-background"></div>
                        </div>
                      </div>
                      <div className="faq-answer-wrapper">
                        <p className="regular-s faq-answer">To apply, you need to provide proof of age, recent academic records, and any other relevant documents depending on the grade level. For detailed requirements, please refer to our Admissions Criteria section.</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question-wrapper">
                        <div className="faq-question-content">
                          <div className="serif-m faq-question">{`What is the school's curriculum focus?`}</div>
                          <div className="faq-question-background"></div>
                        </div>
                      </div>
                      <div className="faq-answer-wrapper">
                        <p className="regular-s faq-answer">Our curriculum is designed to provide a comprehensive education with a focus on core subjects, including math, science, language arts, and social studies, as well as a variety of electives and extracurricular activities.</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question-wrapper">
                        <div className="faq-question-content">
                          <div className="serif-m faq-question">Are there programs for gifted and talented students?</div>
                          <div className="faq-question-background"></div>
                        </div>
                      </div>
                      <div className="faq-answer-wrapper">
                        <p className="regular-s faq-answer">Yes, we offer a range of specialized programs for gifted and talented students. These programs feature advanced coursework in core subjects, enrichment activities designed to challenge and engage students, and opportunities for independent research projects.</p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question-wrapper">
                        <div className="faq-question-content">
                          <div className="serif-m faq-question">What extracurricular activities are available?</div>
                          <div className="faq-question-background"></div>
                        </div>
                      </div>
                      <div className="faq-answer-wrapper">
                        <p className="regular-s faq-answer">We offer a diverse array of extracurricular activities to enhance the student experience. These include competitive sports teams, music and drama clubs, student government, and a variety of special interest groups.</p>
                      </div>
                    </div>
                  </div>
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

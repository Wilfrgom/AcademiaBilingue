"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormState("success");
  };

  return (
    <>
      <Navigation />
      <main className="hero">
        <div className="container container-grow">
          <div className="hero-content internal-hero-content">
            <div className="hero-media-content">
              <div className="hero-main-image">
                <Image
                  src="/images/pexels-julia-m-cameron-4145075_1pexels-julia-m-cameron-4145075.avif"
                  alt="A cheerful student holds a tablet, smiling brightly"
                  fill
                  className="absolute-image"
                />
              </div>
            </div>
            <div className="hero-main-content">
              <div className="hero-text-content text-content-grow">
                <div className="hero-text-wrapper">
                  <h1 className="h1">{`We're Ready to Assist and Guide`}</h1>
                </div>
              </div>
              <div className="icon-link-blocks-grid">
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Phone.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">General Inquiries</div>
                      <p className="regular-s">{`Have questions? Call us, we're happy to help!`}</p>
                    </div>
                  </div>
                  <Link href="tel:+12864468866" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Call Us</span>
                      <span className="button-text regular-s bottom-absolute-text">Call Us</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Phone.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Speak to Admissions</div>
                      <p className="regular-s">For admissions-related inquiries.</p>
                    </div>
                  </div>
                  <Link href="tel:+12864468240" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Call Admissions</span>
                      <span className="button-text regular-s bottom-absolute-text">Call Admissions</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Email.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Email Us</div>
                      <p className="regular-s">For general questions or specific requests.</p>
                    </div>
                  </div>
                  <Link href="mailto:mindspring@school.com?subject=Hello!" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Send Email</span>
                      <span className="button-text regular-s bottom-absolute-text">Send Email</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
                <div className="icon-link-block">
                  <div className="icon-link-block-content">
                    <Image src="/images/Location.svg" alt="" width={24} height={24} className="icon-size-24" />
                    <div className="icon-link-block-text">
                      <div className="serif-m">Visit Our Campus</div>
                      <p className="regular-s">Come see us in person for a campus tour.</p>
                    </div>
                  </div>
                  <Link href="https://www.google.com/maps/dir/?api=1&destination=1107+W+Commerce+St,+Brownwood,+TX+76801,+USA&travelmode=driving" target="_blank" className="button small-button grey-small-button">
                    <div className="button-text-wrapper">
                      <span className="button-text regular-s color-dark-grey">Get Directions</span>
                      <span className="button-text regular-s bottom-absolute-text">Get Directions</span>
                    </div>
                    <div className="button-background bg-color-black"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="colored-section bg-color-primary">
            <div className="flex-center-wrapper">
              <div className="colored-section-stack">
                <div className="section-heading-block">
                  <div className="center-section-heading">
                    <div className="chips">
                      <div className="chips-shape bg-color-primary"></div>
                      <div className="serif-xs">Connect With Us</div>
                    </div>
                    <h2 className="h2">We Look Forward to Hearing from You</h2>
                  </div>
                </div>
                <div className="form-block">
                  {formState === "success" ? (
                    <div className="success-message">
                      <div className="success-message-content">
                        <Image src="/images/Email.svg" alt="" width={48} height={48} className="success-message-icon" />
                        <div className="success-message-text">
                          <h3 className="h3 max-width-200">Your Message Has Been Sent</h3>
                          <p className="regular-s">You can expect a response within 24 hours. Stay tuned for some news!</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="form">
                      <div className="form-content-wrapper">
                        <div className="form-content">
                          <div className="form-input">
                            <label htmlFor="name" className="serif-s form-label">Name</label>
                            <input className="input" maxLength={256} name="name" placeholder="John Anderson" type="text" id="name" required />
                          </div>
                          <div className="form-inputs-row">
                            <div className="form-input">
                              <label htmlFor="email" className="serif-s form-label">Email</label>
                              <input className="input" maxLength={256} name="email" placeholder="john.anderson@gmail.com" type="email" id="email" required />
                            </div>
                            <div className="form-input">
                              <label htmlFor="phone" className="serif-s form-label">Phone</label>
                              <input className="input" maxLength={256} name="phone" placeholder="+1 (232) 368-6863" type="tel" id="phone" />
                            </div>
                          </div>
                          <div className="form-input">
                            <label htmlFor="message" className="serif-s form-label">Message</label>
                            <textarea required placeholder="How can we help you?" maxLength={5000} id="message" name="message" className="input text-area"></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="form-button" disabled={formState === "submitting"}>
                        {formState === "submitting" ? "Please wait..." : "Send a Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section testimonial-section">
        <div className="container container-grow">
          <div className="testimonial-content">
            <Image
              src="/images/Mr.-Jacques-Martinez.avif"
              alt="Mr. Jacques Martinez"
              width={120}
              height={120}
              className="person-image"
            />
            <h2 className="h2 max-width-800-tablet-640">{`"Our school is dedicated to creating an enriching environment where every student's well-being and academic success are our top priorities."`}</h2>
            <div className="person-info">
              <div className="serif-m">Mr. Jacques Martinez</div>
              <div className="regular-s color-dark-grey">Director of Student Services</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

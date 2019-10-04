import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layouts/site-layout"
import ContactMe from "../components/contact-page/contact-me"
import ContactForm from "../components/contact-page/contact-form"
import Questions from "../components/common/questions"

export default () => (
  <Layout>
    <SEO title="contact" />
    <ContactMe />
    <ContactForm />
    <Questions />
  </Layout>
)

"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle, ArrowLeft } from "lucide-react"
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6"

export function ContactSection() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitterName, setSubmitterName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
   e.preventDefault();
   setIsSubmitting(true);

   try {
     const response = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: JSON.stringify({
         access_key: "591db837-4411-4bd1-ac9a-0b32eaff9d48",
         name: formData.name,
         email: formData.email,
         message: formData.message,
       }),
     });

     const result = await response.json();

     if (result.success) {
       console.log("Form submitted successfully:", result);
       setSubmitterName(formData.name);
       setIsSuccess(true);
       // Reset form
       setFormData({ name: "", email: "", message: "" });
     } else {
       console.error("Submission failed:", result);
       alert("Failed to send message. Please try again.");
     }
   } catch (error) {
     console.error("Submission error:", error);
     alert("An error occurred. Please try again.");
   } finally {
     setIsSubmitting(false);
   }
 }
 const handleBackToForm = () => {
   setIsSuccess(false);
   setSubmitterName("");
 }
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a role, freelance brief, or collaboration in mind? Let&apos;s connect and create something amazing together. Send a message, I&apos;ll reply within 24–48 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-7 glass-card">
            <h3 className="text-3xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-4 bg-background/50 border-border/50 focus:border-primary min-h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white transition-all duration-300 size-lg ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'gradient-blue-500 hover:opacity-90 glow-effect'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="px-6 glass-card hover-glow transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">mmesomanzeribe@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="px-6 glass-card hover-glow transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <FaLinkedin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Linkedin</h4>
                  <p className="text-muted-foreground">Connect with me professionally</p>
                </div>
              </div>
            </Card>

            <Card className="px-6 glass-card hover-glow transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <FaGithub className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Github</h4>
                  <p className="text-muted-foreground">Check out my code repositories</p>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <p className="text-muted-foreground mb-2">Follow me on social media</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://x.com/starr_o25?t=nxNCX4BgUDAwLW3J8ihPiA&s=09", "_blank")}
                  className="rounded-full hover-glow transition-all duration-300 bg-transparent"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://www.linkedin.com/in/mmesoma-nzeribe", "_blank")}
                  className="rounded-full hover-glow transition-all duration-300 bg-transparent"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://github.com/Starr365", "_blank")}
                  className="rounded-full hover-glow transition-all duration-300 bg-transparent "
                >
                  <FaGithub className="w-5 h-5" />
                </Button>
                <a href="mailto:mmesomanzeribe@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover-glow transition-all duration-300 bg-transparent"
                  >
                  <Mail className="w-5 h-5" />
                </Button>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Success Message - Overlay Form */}
        {isSuccess && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-8 glass-card text-center relative">
              <button
                onClick={handleBackToForm}
                className="absolute top-4 right-4 p-2 hover:bg-muted/50 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground">
                  Thank you{submitterName && `, ${submitterName}`}! Your message has been sent successfully.
                </p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p>I&apos;ll get back to you as soon as possible.</p>
                <p>You can also reach me through the contact methods listed.</p>
              </div>

              <Button
                onClick={handleBackToForm}
                className="w-full gradient-blue-500 text-white hover:opacity-90"
              >
                Send Another Message
              </Button>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g. send data to an API
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact-us" className="py-20 bg-[#f6eddd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5f6f52] mb-4 font-playfair">
            Contact Us
          </h2>
          <p className="text-lg text-[#5f6f52]/70 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-[#5f6f52]">
                  Send us a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#5f6f52] hover:bg-[#5f6f52]/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#f6eddd] mr-4">
                    <MapPin className="h-5 w-5 text-[#5f6f52]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5f6f52]">Our Location</h3>
                    <p className="text-sm text-[#5f6f52]/70 mt-1">
                      SLIIT Malabe Campus, New Kandy Road,
                      <br />
                      Malabe, Sri Lanka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#f6eddd] mr-4">
                    <Phone className="h-5 w-5 text-[#5f6f52]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5f6f52]">Phone</h3>
                    <p className="text-sm text-[#5f6f52]/70 mt-1">
                      +94 70 214 0856
                      <br /> +94 76 194 4580
                      <br /> +94 76 419 0521
                      <br /> +94 77 084 0728
                      <br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-[#f6eddd] mr-4">
                    <AtSign className="h-5 w-5 text-[#5f6f52]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5f6f52]">Email</h3>
                    <p className="text-sm text-[#5f6f52]/70 mt-1">
                      sulawee@gmail.com
                      <br />
                      ovindumandith@gmail.com
                      <br />
                      it21063596@my.sliit.lk
                      <br />
                      it21254420@my.sliit.lk
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client'

import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import ContactHero from './components/ContactHero';

export default function Contact() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <section className="relative px-6 py-12 overflow-hidden">
                
                <ContactHero />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Side */}
                    <ContactDetails />

                    {/* Right Side */}
                    <ContactForm />

                </div>
            </section>
        </div>
    );
}

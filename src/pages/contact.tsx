import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Navbar } from '../templates/Navbar';

const Contact = () => (
  <div className="text-gray-600 antialiased">
    <Navbar />

    <Section yPadding="py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left: Contact Info */}
        <div>
          <h1 className="mb-6 font-serif text-4xl font-bold text-blue-900">
            Get in Touch
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Have questions about admissions? We are here to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="mr-4 text-2xl">📍</span>
              <p>
                <strong>Address:</strong>
                <br />
                Jl. Tgk. Meunara VIII, Lr. PLN, Desa Garot,
                <br />
                Kec. Darul Imarah, Kab. Aceh Besar, 23352
              </p>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-2xl">📞</span>
              <p>
                <strong>Phone:</strong> +62 651-41027
              </p>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-2xl">📧</span>
              <p>
                <strong>Email:</strong> info@smpislamcendekia.sch.id
              </p>
            </div>
          </div>
        </div>

        {/* Right: Simple Form */}
        <div className="rounded-2xl bg-gray-50 p-8 shadow-inner">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold">Message</label>
              <textarea
                className="h-32 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <Button xl full>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>

    <Footer />
  </div>
);

export default Contact;

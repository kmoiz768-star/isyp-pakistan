export default function Contact() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#0e0524] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-xl text-[#DCD6F7] max-w-3xl">
            Get in touch with ISYP Pakistan regarding research,
            publications, partnerships, events or membership.
          </p>

        </div>
      </section>

      <section className="py-24">

        <div className="max-w-4xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            <div>

              <h2 className="text-3xl font-bold text-[#0e0524] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">
                    contact@isyppakistan.org
                  </p>
                </div>

                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-600">
                    ISYP Pakistan
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">
                    Pakistan
                  </p>
                </div>

              </div>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#0e0524] mb-6">
                Send a Message
              </h2>

              <form className="space-y-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-3 rounded-lg"
                />

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border p-3 rounded-lg"
                />

                <button
                  className="bg-[#0e0524] text-white px-6 py-3 rounded-lg"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
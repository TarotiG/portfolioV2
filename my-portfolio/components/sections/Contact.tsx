export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-blue-100">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-semibold mb-4">📬 Contact</h3>
                <p className="text-gray-600 mb-6">
                    Heb je een project of wil je samenwerken? Stuur me gerust een bericht.
                </p>
                <a
                    href="mailto:tyronlsg@gmail.com"
                    className="inline-block bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg text-white transition font-medium"
                    >
                    Stuur een e-mail
                </a>

            {/* Social media links */}
            <div className="flex justify-center gap-6 mt-8">
                <a
                    href="https://www.linkedin.com/in/tyron-gysbertha-bb623a177/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition font-medium"
                    >
                    LinkedIn
                </a>
        {/*<a*/}
        {/*        href="https://github.com/jouwprofiel"*/}
        {/*        target="_blank"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*        className="text-gray-500 hover:text-blue-600 transition font-medium"*/}
        {/*        >*/}
        {/*        GitHub*/}
        {/*</a>*/}
</div>
</div>
</section>
);
}
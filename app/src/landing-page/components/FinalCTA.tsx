import FadeInWhenVisible from './FadeInWhenVisible';

export default function FinalCTA() {
    return (
        <FadeInWhenVisible>
            <section className="mx-auto mt-32 mb-20 max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Ready to Lock In?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white max-w-2xl mx-auto">
                    Your dreams are waiting. Your discipline is the key.<br />
                    Let MindFrame be your silent partner in the fight.
                </p>
                <div className="mt-10">
                    <a
                        href="/early-access"
                        className="inline-block rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 dark:text-black"
                    >
                        Join the Early Access List →
                    </a>
                </div>
            </section>
        </FadeInWhenVisible>
    );
}

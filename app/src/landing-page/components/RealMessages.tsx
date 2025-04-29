import FadeInWhenVisible from './FadeInWhenVisible';
import stoicFigure from '../../client/static/stoic-figure.webp'; // or you can use another image later

export default function RealMessages() {
    return (
        <FadeInWhenVisible>
            <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pb-20">
                    {/* LEFT side: Text */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Real Messages That <span className="italic">Hit</span> Home
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                            MindFrame uses AI to craft messages that feel like they were written just for you.
                        </p>
                        <blockquote className="mt-8 italic border-l-4 border-yellow-400 pl-4 text-gray-600 dark:text-white">
                            "Remember why you chose this path: [your reason]. Stay sharp. Eyes forward."
                        </blockquote>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                            That's the kind of fuel you get. Every day.
                        </p>
                    </div>

                    {/* RIGHT side: Image */}
                    <div className="flex justify-center">
                        <img
                            src={stoicFigure}
                            alt="Stoic Mem Figure"
                            width={500}
                            height={500}
                            className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
                        />
                    </div>
                </div>
            </section>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
        </FadeInWhenVisible>
    );
}
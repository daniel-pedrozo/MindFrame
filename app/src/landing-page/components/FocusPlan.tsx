import FadeInWhenVisible from './FadeInWhenVisible';

const checklistItems = [
    "Set your Focus Plan.",
    "Define what matters.",
    "Set when and how you want your reminders.",
    "Let MindFrame keep you aligned.",
];

export default function FocusPlan() {
    return (
        <FadeInWhenVisible>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
            <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 text-center pb-20">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Stay <span className="text-yellow-500">Locked In</span>
                </h2>
                <div className="mt-10 mx-auto max-w-2xl text-left">
                    <ul className="space-y-6">
                        {checklistItems.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <div className="flex-shrink-0">
                                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-400 text-white">
                                        ✅
                                    </span>
                                </div>
                                <p className="ml-4 text-lg leading-7 text-gray-600 dark:text-white">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 mx-auto max-w-2xl text-gray-600 dark:text-white text-lg leading-7">
                        <blockquote className="italic border-l-4 border-yellow-400 pl-4">
                            "No noise. No spam. Just pure, powerful nudges when you need them most."
                        </blockquote>
                    </div>
                </div>
            </section>
            <div className="border-t border-gray-200 dark:border-gray-700"></div>
        </FadeInWhenVisible>
    );
}

import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function SecondSection() {
    return (
        <section className="content-section bg-white text-neutral-900 py-24 px-6">
            <article className="article-content max-w-3xl mx-auto">
                <h2 className="article-title text-4xl font-bold mb-8">Lorem ipsum dolor</h2>
                <p className="text-xl leading-relaxed mb-6">
                    uspendisse mauris lacus, suscipit non justo in, lobortis malesuada justo. Duis varius, erat vitae rhoncus scelerisque, nibh nunc fringilla arcu, faucibus luctus justo velit ac tortor.
                </p>
                <div className="callout-box bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
                    <div className="flex items-start">
                        <AlertCircle className="text-amber-600 mr-4 flex-shrink-0" size={24} />
                        <p className="text-lg">
                            ulla nec erat et metus auctor faucibus. Vestibulum eget diam pellentesque sapien tristique placerat quis vel neque.
                        </p>
                    </div>
                </div>
                <p className="text-xl leading-relaxed mb-6">
                    Aenean rhoncus ac lorem luctus scelerisque. Fusce commodo ut velit sit amet lacinia. Maecenas iaculis dolor lectus, vel suscipit massa iaculis at. In id massa eget urna vehicula rutrum nec ac tellus. Pellentesque at congue elit, eu cursus nisi. Maecenas tempor, risus eget consectetur sagittis, purus sem pulvinar leo, eu luctus sem massa sed nulla.
                </p>
            </article>
        </section>
    );
}
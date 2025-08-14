import React from 'react';

const Ourworks: React.FC = () => {
    return (
    <section className="container py-16 md:py-24">
    <div className="mx-auto px-">
        <div className="grid md:grid-cols-2 items-start mb-12 lg:gap-x-[18%]">
            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-relaxed whitespace-normal lg:whitespace-nowrap leading-snug" style={{lineHeight: "1.5"}}>
                    Guided By Vision,{" "}
                    <span className="text-muted-foreground">Powered By Purpose </span>
                </h1>
            </div>
        </div>
    </div>
    </section>
    );
};

export default Ourworks;
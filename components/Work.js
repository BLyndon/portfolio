import React from 'react';
import Link from 'next/link';

export const Skills = ({ title, cards }) => {
    return (
        <div id="skills" className="bg-secondary py-5 px-5">
            <div className="container">
                <h1 className="text-primary fw-bold">{title}</h1>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {cards.map((value, index) => (
                        <Card
                            key={index}
                            title={value.title}
                            description={value.description}
                            link={value.link}
														icons={value.icons} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const Projects = ({ title, cards }) => {
    return (
        <div id="projects" className="bg-primary py-5 px-5">
            <div className="container">
                <h1 className="text-light fw-bold">Projects</h1>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {cards.map((value, index) => (
                        <Card
                            key={index}
                            title={value.title}
                            description={value.description}
                            icons={value.icons} />
                    ))}
                </div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
            </div>
        </div>
    );
}

export const Education = ({ title, cards }) => {
    return (
        <div id="education" className="bg-secondary py-5 px-5">
            <div className="container">
                <h1 className="text-primary fw-bold">{title}</h1>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {cards.map((value, index) => (
                        <CardRecangle
                            key={index}
                            title={value.title}
                            description={value.description}
                            link={value.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-2 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem", borderRadius: "8px" }}>
			<h4 className="text-primary m-0">{title}</h4>
			<p className="text-dark mt-2">{description}</p>
			<div className="d-flex justify-content-end align-items-center gap-2 flex-wrap">
				{icons && icons.map((value, index) => (
					value.link ? (
						<Link key={index} href={value.link}>
							<a target="_blank" rel="noreferrer" className="d-flex align-items-center">
								<value.icon className="icon-style" size="1.5em" />
							</a>
						</Link>
					) : (
						<value.icon key={index} className="icon-style" size="1.5em" />
					)
				))}
			</div>
		</div>
	);
}


export const CardRecangle = ({ title, description, icons }) => {
    return (
        <div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
            <h4 className="text-primary">{title}</h4>
            <p className="text-dark">{description}</p>
            <div className="text-end">
                {icons && icons.map((value, index) => (
                    <Link key={index} href={value.link}>
                        <a target="_blank" rel="noreferrer">
                            <value.icon className="icon-style mx-1" size="2em" />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

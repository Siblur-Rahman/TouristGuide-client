
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-2">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
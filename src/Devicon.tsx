import "devicon";

function Devicon({ icon, size }: { icon: string; size: number | undefined }) {
    let style = {
        fontSize: "2rem",
    };

    const userStyle = {
        fontSize: `${size}rem`,
    };

    if (size !== undefined) {
        style = userStyle;
    }
    return (
        <>
            <i className={`devicon-${icon}-plain`} style={style}></i>
        </>
    );
}
export default Devicon;

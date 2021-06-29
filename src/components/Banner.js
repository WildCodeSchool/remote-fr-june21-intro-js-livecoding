import banner from '../assets/banner.jpeg';

function Banner() {
    const divStyle = {
        backgroundColor: "blue",
        color: "red",
        textAlign: "center"
    }

    return (
        <div style={divStyle} >
            <img src={banner} />
            <p>Hello, we are Raccoon</p>
        </div>
    )
}

export default Banner;

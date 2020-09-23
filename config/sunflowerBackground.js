import device from "../config/device";

const SunflowerBackground = `background-image: url("./images/sunflower-background.svg");
background-repeat: no-repeat;
background-attachment: fixed;
background-position: 0% 1500%;
background-size: 100%;

@media ${device.laptop} {
    background-position: 0% -25%;
background-size: 80%;
}
`;

export default SunflowerBackground;

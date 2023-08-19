import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    const currentYear = new Date().getFullYear();
    const currMonth = new Date().toLocaleString([], {
        month: 'long',
    });
    const currDay = new Date().getDate();
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 ">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            >
            </SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>{currMonth} {currDay}, {currentYear}</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum reprehenderit pariatur quo similique repellendus cumque non iste unde ipsum. Obcaecati est alias eius hic vel aliquid velit a nesciunt, voluptatibus quidem ex placeat, beatae deserunt asperiores suscipit repellendus. Non nesciunt eaque doloremque officia saepe, possimus ipsum eos iste corporis.</p>
                    <button className="btn btn-outline btn-info mt-2 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg1 from '../../../assets/menu/banner3.jpg'
import menuImg2 from '../../../assets/menu/dessert-bg.jpeg'
import menuImg3 from '../../../assets/menu/pizza-bg.jpg'
import menuImg4 from '../../../assets/menu/soup-bg.jpg'
import menuImg5 from '../../../assets/menu/salad-bg.jpg'

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg1} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Todays Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title={"dessert"} img={menuImg2}></MenuCategory>

            <MenuCategory items={pizza} title={"pizza"} img={menuImg3}></MenuCategory>

            <MenuCategory items={soup} title={"soup"} img={menuImg4}></MenuCategory>

            <MenuCategory items={salad} title={"salad"} img={menuImg5}></MenuCategory>

            <MenuCategory items={drinks} title={"drinks"} img={menuImg5}></MenuCategory>
        </div>
    );
};

export default Menu;


const MenuItem = ({item}) => {
    const {image, price, recipe, name} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 250px 250px 250px'}} className="w-[100px] border border-2 border-gray-400" src={image} alt="" />
            <div>
                <h3 className="text-yellow-600">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;
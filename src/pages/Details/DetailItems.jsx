const DetailItems = ({ item }) => {
  const { name, image, short_description, description, price } = item || {};

  return (
    <div>
      <div className="w-full mx-auto mb-5 p-2">
        <img className="rounded-t-md" src={image} alt="" />
        <div>
          <h2 className="card-title text-4xl font-bold">{name}</h2>
          <p className="text-lg">
            {short_description} {description}
          </p>
          <div className="p-2 text-3xl font-bold">Price: $ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailItems;

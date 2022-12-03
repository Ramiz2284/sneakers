import Card from "../components/Card";

function Favorits({ items, onAddFavorits }) {
    return (
        <div className="content">
            <div className="title">
                <h2>Добавленное в фавориты</h2>

            </div>

            <div className="sneakers">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        favorited={true}
                        onFavorits={onAddFavorits}
                        {...item}
                    />
                ))}
            </div>

        </div>
    );
}

export default Favorits;
import "./404.scss";

const PageError = () => {
    return (
        <div className="pageError">
            <h1 className="pageError_title">Страницы не существует</h1>
            <img
                className="pageError__img"
                src="https://www.meme-arsenal.com/memes/93868ba99b0018627fd5c5353b137ba5.jpg"
                alt=""
                width={600}
                height={500}
            />
        </div>
    );
};

export default PageError;

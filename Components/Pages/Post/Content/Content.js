import * as S from './Content.styled'

const Content = ({data}) => {
    return (
        <S.ContentContainer className='center'>
            <div className="inner content">
                <div className="meta">
                    <h1 lang='de'>{data.title}</h1>
                    <span>by {data.userName}</span>
                </div>
                {/* The .png is needed for imgur images */}
                <div className="image" style={{backgroundImage: `url('${data.imageURL}.png')`}}></div>
                <div className="text">
                    {/* Lang de for word break */}
                    <p lang='de'>
                        {data.text}
                    </p>
                </div>
            </div>
        </S.ContentContainer>
    );
}

export default Content;
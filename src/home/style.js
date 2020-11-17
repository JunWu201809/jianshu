import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top:30px;
    width: 625px;

`;

export const HomeRight = styled.div`
    width: 240px;
    padding-top:30px;
    float: right;
`;

export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
width: 500px;
float: left;
h3{
    margin-top: 0px;
}
.title{
    line-height: 33px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}
.desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    height: 300px;
    line-height: 300px;
    text-align:center;
`;

export const WriterItem = styled.div`
width: 278px;
padding-top: 5px;
margin-right: 60px;
font-size: 14px;
display: block;
overflow: hidden;
&.title{
    cursor: pointer;
    color: #333;
}
&.like{
    color: #333;
}
`;
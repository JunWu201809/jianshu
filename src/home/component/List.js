import React, { PureComponent } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item,index) => {
                        return (
                            <Link key={index} to={'/detail/'+ item.get('id')}>
                                <ListItem key={item.get('id')}>
                                    <img className="pic" src={item.get('imgUrl')} alt=''></img>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        );
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('home').get('articleList')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispathToProps)(List);
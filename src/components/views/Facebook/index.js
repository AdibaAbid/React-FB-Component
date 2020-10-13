import React, { useState } from 'react';
import moment from 'moment';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from 'react-facebook-emoji';



function Facebook(props) {

    const [showEmoji, setEmoji] = useState(false)
    console.log(props)

    return (
        <section >
            <div style={{paddingTop:2}}>
                <div className='fb-card'>
                    <img className='avtar' src={props.userObject.avtar} />
                    <div className='title'>
                        <h1>{props.userObject.createdBy}</h1>
                        <p>{moment(props.userObject.createdAt).format('LL')} {moment(props.userObject.createdAt).startOf('hour').fromNow()}</p>
                    </div>
                </div>
                <p className='desp'>{props.userObject.descriptions}</p>
                <div>
                    <FbImageLibrary images={props.userObject.images} />
                </div>
                {
                showEmoji &&
                    <div className='emoji'>
                        <FacebookEmoji type="like" size="sm" />
                        <FacebookEmoji type="love" size="sm" />
                        <FacebookEmoji type="wow" size="sm" />
                        <FacebookEmoji type="yay" size="sm" />
                        <FacebookEmoji type="angry" size="sm" />
                        <FacebookEmoji type="haha" size="sm" />
                        <FacebookEmoji type="sad" size="sm" />
                    </div>
                }
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button
                        onMouseEnter={() => setEmoji(true)}
                        onMouseLeave={() => setEmoji(false)}
                    ><i class="fas fa-thumbs-up"></i> Like</button>
                    <button><i class="fas fa-comments"></i> Comment</button>
                    <button><i class="fas fa-share-alt-square"></i> Share</button>
                </div>
            </div>
        </section>
    )
}
export default Facebook;
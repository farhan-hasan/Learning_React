import React from 'react';

const ProfilePage = () => {

    let {facebookId,youtubeId} = useParams();

    return (
        <div>
            <Menu/>
            <p>Facebook : {facebookId}</p>
            <p>YouTube : {youtubeId}</p>
            <h1>This is ProfilePage</h1>
        </div>
    );
};

export default ProfilePage;
import React from 'react';
export default class NotFound extends React.Component{
    render(){
    return (
        <>
        <div className='text-center'><h2 className='text-center'>Page Not Found 404</h2>
        <a href="/home" className='link'>Go Back To Home</a>
        </div>
        </>
    );
    }
}
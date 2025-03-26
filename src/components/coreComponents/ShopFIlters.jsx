
import React from 'react';
export default class ShopFilter extends React.Component {
    constructor(props){
        super();
    }   
    render() {
        return (
            <>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12">
                            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3 justify-content-between">
                                <strong className="d-block py-2">{this.props.totalItems} Items found </strong>
                                <div className="ms-auto">
                                    <select className="form-select d-inline-block w-auto border pt-1 form-control">
                                        <option value="0">Best match</option>
                                        <option value="1">Recommended</option>
                                        <option value="2">High rated</option>
                                        <option value="3">Randomly</option>
                                    </select>
                                    <div className="btn-group shadow-0 border">
                                        <a href="#" className="btn btn-light" title="List view">
                                            <i className="fa fa-bars fa-lg"></i>
                                        </a>
                                        <a href="#" className="btn btn-light active" title="Grid view">
                                            <i className="fa fa-th fa-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
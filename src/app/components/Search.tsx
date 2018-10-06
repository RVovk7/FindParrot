import * as React from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

export default function Search(){
        return (
            <div className="search">
                <h1> <strong> Quick Search for your
                    <span> Perfect Product</span> </strong>
                </h1>
                <div className="AfterSearchText">
                    <h5>INOVATE</h5>
                    <h5>LIST</h5>
                    <h5>CONNECT</h5>
                </div>
                <div className="searchDiv">
                    <DropdownButton
                    className="DropdownButton"
                        bsStyle="default"
                        title="category"
                        key='1'
                        id={`dropdown-basic-1`}>
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3" >
                            Active Item
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                    <input className="searchInput" type='text'></input>
                    <Button className="searchButton">START SEARCHING
                    </Button>
                </div>
            </div>
        );
}

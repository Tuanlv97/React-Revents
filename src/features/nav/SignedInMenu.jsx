import React from "react";
import {Button, Container, Dropdown, Image, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function SignedInMenu() {
    return (
        <Menu.Item position='right' >
           <Image avatar spaced='right' src='/assets/user.png' />
            <Dropdown pointing='top left' text='Bob'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
        </Menu.Item>
    )
}

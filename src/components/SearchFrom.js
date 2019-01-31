import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Form inline onSubmit={this.props.queryHanlder}>
                    <FormGroup controlId="formInlineName">
                        <FormControl name="query" className="searchBox" type="text" placeholder="Digite o nome do filme que procura..." />
                    </FormGroup>
                    {' '}
                    <Button className="search_btn" type="submit">Buscar</Button>
                </Form>
            </div>
        );
    }
}
//

export default SearchForm;
import React, {Component} from 'react';
import {FaGithubAlt,  FaPlus, FaSpinner } from 'react-icons/fa';
import {Container, Form, SubmitButtom} from './styles';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepository: '',
    repositories: [],
    loading : false,
  };

handleInputchange =e => {
  this.setState({newRepository: e.target.value});
};

handleSubmit = async e =>{
    e.preventDefault();
    this.setState({loading: true});
    const {newRepository, repositories} = this.state;
    const response = await api.get(`/repos/${newRepository}`);

      console.log(response.data);

      const data = {
        name: response.data.full_name,
    };

    this.setState({
      repositories: [... repositories, data],
      newRepository: '',
      loading: false,
    });
}

render(){
const {newRepository, loading} = this.state;

return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
    <Form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Adicionar repositório"
         onChange={this.handleInputchange} value={newRepository} />

        <SubmitButtom loading={loading}>

        {loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="FFF" size={14}/> }

        </SubmitButtom>
    </Form>

    </Container>
    );
  }
}

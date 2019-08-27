import React from 'react';
import {FaGithubAlt,  FaPlus } from 'react-icons/fa';
import {Container, Form, SubmitButtom} from './styles';

export default function Main() {
  // return <Title error={false}>Hello World</Title>
return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios 
        </h1>
    <Form unSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButtom disabled>
          <FaPlus color="FFF" size={14}/>
        </SubmitButtom>
    </Form>

    </Container>
    );
  }

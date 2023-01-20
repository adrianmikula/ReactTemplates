import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Container, Card, Icon, Image, Loader, Dimmer, Button, Select, Message } from 'semantic-ui-react'

export default class Medium extends Component {
  state = {
      loading: true,
      articles: null,
      categories: [
          {key:1, text:"Technology", value:"technology"},
          {key:2, text:"Science", value:"science"},
          {key:3, text:"Blockchain", value:"blockchain"}
      ],
      noInternetError: false
  }
  getMediumArticle = (topic) => {
      let url = "https://medrum.herokuapp.com/articles"
      if (topic) url += `?topic=${topic}`
      axios.get(url)
      .then(res => {
          this.setState({
              loading: false,
              articles: res.data
          })
      })
      .catch(err => this.setState({noInternetError: true, loading:false}))
  }
  selectCategory = (e) => {
    
      this.getMediumArticle(e.target.innerText)
  }
  componentDidMount(){
      this.getMediumArticle()
  }
  render() {
      if (this.state.loading) return (<Dimmer active>
      <Loader size='huge'>Loading</Loader>
    </Dimmer>)
    
    if (this.state.noInternetError) return (
        <Dimmer active>
        <Message
    icon='info circle'
    header='Internet Connection Error'
    content='There seems to be issue with your internet'
    negative
  />
  <Button color='blue' onClick={this.getMediumArticle}>Try Again</Button>
        </Dimmer>
    )
    return (
      <Container>
      <Select placeholder='Choose a category' options={this.state.categories} onChange={this.selectCategory} />

       <Card.Group doubling itemsPerRow={4} stackable>
      {this.state.articles && this.state.articles.map((article, k)=>{
          return (
              <Fragment key={k}>
              <Card>
            <Image src={article?.image_url} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{article?.title}</Card.Header>
            <Card.Meta>
                <p>
                    {article?.author?.name} {article?.publication?`in ${article?.publication?.name}`:`in ${article?.author?.name}`}
                </p>
            </Card.Meta>
            <Card.Description>
                {article.summary}
            </Card.Description>

            </Card.Content>
            <Card.Content extra>
            <span className='date' style={{marginRight: "10px"}}>{article?.date}  - {article?.reading}</span>
            
            <a href={article?.url} target="_blank" rel="noopener noreferrer"><Button color='blue'>Read more</Button></a>
            </Card.Content>
        </Card>
        </Fragment>
          )
      })}
      </Card.Group>
        
      </Container>
    )
  }
}
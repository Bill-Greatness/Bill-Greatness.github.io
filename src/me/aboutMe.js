import React from 'react'
import {Container, Grid, Header, Button, Image, Icon, TransitionablePortal } from 'semantic-ui-react'
import me from '../images/bill-greatness.png'
class AboutMe extends React.Component {
  render () {
    return(
      <TransitionablePortal open={this.props.current_view === 'about_me'} transition={{animation:'fly down', duration:2000}} >
      <Container>
          <Grid columns={2}>
            <Grid.Column computer={10}>
                <Header content='Hi, I am ' as='h1' className='intro'/>
                <Header as='h1' className='my-name'>
                  <Header.Content>
                      Bill Greatness
                  </Header.Content>
                  <br/>
                <Header.Subheader style={{color:'white'}}>I am an optimist
                   who loves writing software programs with the aim of defining the future.
                I currently work mostly with ReactJS, MeteorJS and Django.<br/> I spend most
                 of my time either writing codes or speaking with kids about Technology.<br/><br/>
              </Header.Subheader>
              <Button circular color='blue' onClick={this.props.change_view('contact_me')}> <Icon name='code'/>Hire Me</Button>
              </Header>
            </Grid.Column>

            <Grid.Column computer={6}>
              <Image src={me}  size='medium'/>
            </Grid.Column>

          </Grid>
      </Container>
      </TransitionablePortal>
    )
  }
}

export default AboutMe;

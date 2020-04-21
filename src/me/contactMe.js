import React from 'react'
import me from '../images/bill-greatness.png'
import {List, Icon, Grid, Container,  TransitionablePortal, Image, Header} from 'semantic-ui-react'

const INITIAL_STATE = {
  contact_name:'',
  contact_mail:'',
  message_content:''
}
class ContactMe extends React.Component {
  constructor(){
    super()
    this.state = {
      contact_name:'',
      contact_mail:'',
      message_content:''
    }
  }

  handleFormField = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  subMitMessage = event => {
    event.preventDefault()
    this.setState({...INITIAL_STATE})
  }
  render () {
      return(
        <TransitionablePortal open={this.props.current_view==='contact_me'} transition={{animation:'fly down', duration:2000}}>
        <Container >
        <Header as='h1' inverted>
          <Header.Content className='intro'>
            <Icon name='tty'/> Reach Out To Me
          </Header.Content>
          <Header.Subheader>Projects, Assistance, or anything life changing !
          </Header.Subheader>
        </Header>
        <Grid columns={2}>
            <Grid.Column computer={10}>
            <br/>
            <br/>
            <List divided relaxed inverted>
              <List.Item>
                <List.Icon name='call' color='teal' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a' href="tel:050 934 3841">+233 (0) 50 934 3841</List.Header>
                </List.Content>
                <br/>
                <br/>
              </List.Item>

              <List.Item>
                <List.Icon name='at' color='teal' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a' href="mailto:billgreatness@outlook.com">billgreatness@outlook.com</List.Header>
                </List.Content>
                <br/>
                <br/>
              </List.Item>

              <List.Item>
                <List.Icon name='facebook messenger' color='teal' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a' href='https://www.facebook.com/bill.greatness.77'>facebook messenger</List.Header>
                </List.Content>
                <br/>
                <br/>
              </List.Item>


              <List.Item>
                <List.Icon name='location arrow' color='teal' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header as='a' >Takoradi, Ghana</List.Header>
                </List.Content>
                <br/>
                <br/>
              </List.Item>

            </List>
            <Grid>
                <Grid.Column mobile={16} computer={16}>
                  <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31802.087048028126!2d-1.8036897485468293!3d4.895935661941005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7799a7b4d8bd9%3A0xd5df62ba6ac74520!2sTakoradi!5e0!3m2!1sen!2sgh!4v1587470730818!5m2!1sen!2sgh" width='100%'  frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </Grid.Column>
            </Grid>
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

export default ContactMe;

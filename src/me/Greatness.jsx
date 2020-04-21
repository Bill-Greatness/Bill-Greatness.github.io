import React, { Component } from 'react'
import {Grid, Menu , Container, TransitionablePortal} from 'semantic-ui-react'
import AboutMe from './aboutMe'
import ContactMe from './contactMe'
import PortFolio from './portFolio'

export default class Greatness extends Component {
  constructor(){
    super()
    this.state = {
      current_view:'about_me',
      side_open:false
    }
  }
  changeView = name => event => {
    this.setState({current_view:name})
  }
  toggleBar = event => {
    this.setState({current_view:this.state.current_view, side_open:!this.state.side_open})
  }
  render() {
      let current_view

      switch (this.state.current_view) {
        case 'about_me':
          current_view = <AboutMe current_view={this.state.current_view} change_view={this.changeView}/>
          break;
        case 'contact_me':
          current_view = <ContactMe current_view={this.state.current_view}/>
          break;
        case 'portfolio':
          current_view = <PortFolio current_view={this.state.current_view} />
          break;
        default:
          current_view = <AboutMe current_view={'about_me'} change_view={this.changeView}/>

      }
    return (
        <Grid className='top-grid'>
                <Grid.Column computer={16}>
                        <Container>
                            <Menu borderless pointing inverted style={{border:'none', background:' #0000A0'}}>
                                <Menu.Item
                                  as='a'
                                  icon='linkedin'
                                  target='_blank'
                                  href='https://www.linkedin.com/in/bill-clinton-debrah-086278196'
                                  />
                                  <Menu.Item
                                    as='a'
                                    icon='twitter'
                                    target='_blank'
                                    href='https://www.twitter.com/bill_greatness'
                                    />
                                    <Menu.Item
                                      as='a'
                                      icon='facebook f'
                                      target='_blank'
                                      href='https://facebook.com/bill.greatness.77'
                                      />
                                      <Menu.Item
                                        as='a'
                                        icon='github'
                                        target='_blank'
                                        href='https://github.com/Bill-Greatness'
                                        />

                                <Menu.Menu position='right'>
                                  <Menu.Item
                                    as='a'
                                    name='About'
                                    active={this.state.current_view === 'about_me'}
                                    onClick={this.changeView('about_me')}
                                    className='desktop-link'
                                    />
                                    <Menu.Item
                                      as='a'
                                      name='Portfolio'
                                      onClick={this.changeView('portfolio')}
                                      className='desktop-link'
                                      active={this.state.current_view === 'portfolio'}
                                      />
                                      <Menu.Item
                                        as='a'
                                        name='Contact'
                                        active={this.state.current_view === 'contact_me'}
                                        onClick={this.changeView('contact_me')}
                                        className='desktop-link'
                                        />
                                        <Menu.Item
                                          className='mobile-icon'
                                          as='a'
                                          icon='bars'
                                          onClick={this.toggleBar}
                                          />
                                </Menu.Menu>
                            </Menu>
                              {current_view}
                              <TransitionablePortal open={this.state.side_open}>

                                  <Menu vertical  inverted style={{position:'fixed', left:'80%', zIndex:1000}}>
                                    <Menu.Item
                                      as='a'
                                      name='About'
                                      active={this.state.current_view === 'about_me'}
                                      onClick={this.changeView('about_me')}

                                      />
                                      <Menu.Item
                                        as='a'
                                        name='Portfolio'
                                        onClick={this.changeView('portfolio')}
                                        active={this.state.current_view === 'portfolio'}
                                        />
                                        <Menu.Item
                                          as='a'
                                          name='Contact'
                                          active={this.state.current_view === 'contact_me'}
                                          onClick={this.changeView('contact_me')}

                                          />
                                  </Menu>

                              </TransitionablePortal>
                        </Container>
                </Grid.Column>
        </Grid>
    )
  }
}

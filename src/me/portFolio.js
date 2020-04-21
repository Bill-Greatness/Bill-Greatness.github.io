import React from 'react'
import logicians from '../images/logicians.png'
import ghanahealth from '../images/ghana-health.png'
import phoenix from '../images/phoenix-tech.jpg'
import {Grid, Container, TransitionablePortal, Header, Segment, Icon, Divider, List, Rating, Item} from 'semantic-ui-react'

class PortFolio extends React.Component {
  render () {
      return(
        <TransitionablePortal open={this.props.current_view==='portfolio'} transition={{animation:'fly down', duration:2000}}>
        <Container >
          <Grid columns={3} stackable>
            <Grid.Column>
              <Divider horizontal inverted children={<Icon name='code'/>} />
              <Segment raised style={{backgroundColor:'darkblue'}}>
                  <Header icon='code' content='Frontend Technologies' inverted/>
                  <Segment raised style={{backgroundColor:'darkblue'}}>
                    <List divided  relaxed inverted>
                      <List.Item>
                        <List.Icon name='react' color='blue' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>React JS</List.Header>
                          <List.Description><Rating defaultRating={4} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <List.Icon name='js' color='orange' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>JavaScript</List.Header>
                          <List.Description><Rating defaultRating={4} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <List.Icon name='node js' color='teal' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Nodejs</List.Header>
                          <List.Description><Rating defaultRating={4} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <List.Icon name='html5' color='red' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>HTML5/CSS3/SASS</List.Header>
                          <List.Description><Rating defaultRating={5} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                    </List>
                  </Segment>
              </Segment>
            </Grid.Column>

            <Grid.Column>
            <Divider horizontal inverted children={<Icon name='database'/>} />
            <Segment raised style={{backgroundColor:'darkblue'}}>
              <Header as='h3' icon='database' inverted content='Backend Technologies'/>
              <Segment raised style={{backgroundColor:'darkblue'}}>
                <List divided  relaxed inverted>
                  <List.Item>
                    <List.Icon name='python' color='teal' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>Python/Django</List.Header>
                      <List.Description><Rating defaultRating={4} maxRating={6} /></List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Icon name='database' size='large' color='orange' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>Postgresql/MySql</List.Header>
                      <List.Description><Rating defaultRating={3} maxRating={6} /></List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Icon  size='large' verticalAlign='middle'>
                      <svg style={{width:'25px', height:'25px'}} viewBox="0 0 24 24">
                          <path fill="#fffc3a" d="M19.8,16.7C19.8,16.7 21.6,16.5 21.6,14.3C21.6,12.1 19.5,11.8 19.5,11.8H15.7V19H17.6V17.3L19.3,19H22L19.8,16.7M19,15.3H17.5V13.7H19C19,13.7 19.4,13.9 19.4,14.5C19.5,15.1 19,15.3 19,15.3M21.3,8.2V8.4C13.2,6.1 10,13.2 10.6,18.7C10.6,18.7 4.9,18.7 4.3,18.7C5,13.3 11.8,2.6 21.3,8.2M20.5,6.9C19.8,6.6 19.1,6.3 18.4,6.1L18.5,4.8L20.6,5.6L20.5,6.9M18.5,8.7C19.2,8.7 19.9,8.8 20.6,9L20.5,10.2L18.7,10L18.5,8.7M13.9,5.8L13.5,4.6L15.6,4.4L16,5.7C15.8,5.7 14.1,5.8 13.9,5.8M15.2,9.5C15.6,9.3 16.3,9 17.2,8.8L17.6,10L15.8,10.7L15.2,9.5M11.8,6.5C11.2,6.8 10.6,7.1 10,7.5L9.2,6.2L11,5.2L11.8,6.5M14.3,10.1L15.1,11.3L14,12.6L12.9,11.6C13.2,11 13.7,10.5 14.3,10.1M11.6,15C11.7,14.2 11.9,13.5 12.2,12.7L13.4,13.7L13.1,15.6L11.6,15M7.9,9.3C7.4,9.8 6.9,10.4 6.5,10.9L5.2,9.8L6.7,8.2L7.9,9.3M4.8,13.7C4.4,14.5 4.1,15.3 3.8,16L2,15.3L2.9,13L4.8,13.7M11.5,16.3L13.3,16.9L13.6,18.9L11.6,18.4C11.6,18.2 11.5,17.5 11.5,16.3Z" />
                      </svg>

                    </List.Icon>
                    <List.Content>
                      <List.Header as='a'>Ruby on Rails</List.Header>
                      <List.Description><Rating defaultRating={3} maxRating={6} /></List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Icon  size='large' verticalAlign='middle' >
                      <svg style={{width:'26px', height:'26px'}} viewBox="0 0 24 24">
                            <path fill="red" d="M2.8,3L19.67,18.82C19.67,18.82 20,19.27 19.58,19.71C19.17,20.15 18.63,19.77 18.63,19.77L2.8,3M7.81,4.59L20.91,16.64C20.91,16.64 21.23,17.08 20.82,17.5C20.4,17.97 19.86,17.59 19.86,17.59L7.81,4.59M4.29,8L17.39,20.03C17.39,20.03 17.71,20.47 17.3,20.91C16.88,21.36 16.34,21 16.34,21L4.29,8M12.05,5.96L21.2,14.37C21.2,14.37 21.42,14.68 21.13,15C20.85,15.3 20.47,15.03 20.47,15.03L12.05,5.96M5.45,11.91L14.6,20.33C14.6,20.33 14.82,20.64 14.54,20.95C14.25,21.26 13.87,21 13.87,21L5.45,11.91M16.38,7.92L20.55,11.74C20.55,11.74 20.66,11.88 20.5,12.03C20.38,12.17 20.19,12.05 20.19,12.05L16.38,7.92M7.56,16.1L11.74,19.91C11.74,19.91 11.85,20.06 11.7,20.2C11.56,20.35 11.37,20.22 11.37,20.22L7.56,16.1Z" />
                      </svg>

                    </List.Icon>
                    <List.Content>
                      <List.Header as='a'>MeteorJS</List.Header>
                      <List.Description><Rating defaultRating={5} maxRating={6} /></List.Description>
                    </List.Content>
                  </List.Item>

                </List>
              </Segment>
            </Segment>
            </Grid.Column>


            <Grid.Column>
            <Divider horizontal inverted children={<Icon name='gem'/>} />
            <Segment raised style={{backgroundColor:'darkblue'}}>
                <Header icon='gem' as='h3' inverted content='Personal Profile'/>
                  <Segment raised style={{backgroundColor:'darkblue'}}>
                    <List divided  relaxed inverted>
                      <List.Item>
                        <List.Icon name='lightbulb' color='blue' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Optimism</List.Header>
                          <List.Description><Rating defaultRating={4} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <List.Icon name='bullhorn' color='orange' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Public Speaking</List.Header>
                          <List.Description><Rating defaultRating={5} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <List.Icon name='clock' color='teal' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>Time Consciousness</List.Header>
                          <List.Description><Rating defaultRating={5} maxRating={6} /></List.Description>
                        </List.Content>
                      </List.Item>

                      <List.Item>
                        <List.Icon  color='red' size='large' verticalAlign='middle' >

                          <svg style={{width:'26px', height:'26px'}} viewBox="0 0 24 24">
                          <path fill="currentColor" d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z" />
                      </svg>

                        </List.Icon>
                        <List.Content>
                          <List.Header as='a'>Critical Thinking</List.Header>
                          <List.Description ><Rating defaultRating={5} maxRating={6} ><Rating.Icon name='star' className='rate-icon'/></Rating></List.Description>
                        </List.Content>
                      </List.Item>

                    </List>
                  </Segment>
            </Segment>
            </Grid.Column>

          </Grid>
            <Grid>
              <Divider horizontal inverted>Roles Taken</Divider>
                <Container>
                    <Grid.Column computer={16} mobile={16}>
                      <Item.Group divided >
                       <Item>
                         <Item.Image size='small' src={logicians} />

                         <Item.Content>
                           <Item.Header as='a' href='http://www.thelogickids.com' target='_blank' style={{color:'white'}}>Logicians Enterprise Ghana</Item.Header>
                             <Item.Meta>
                                <span style={{color:'#FFB800'}}>C.E.O 2019 - Present</span>
                              </Item.Meta>
                           <Item.Description style={{color:'white'}}>
                             <p>Logician is an Institution the focus on providing practical computer training to kids in the country. Kids are
                               taken through technological fields such as computer programing, robotics and more.
                              </p>
                              <p>
                               We are currently training about 500 students in the western part of the country, specifically Sekondi Takoradi
                             </p>
                           </Item.Description>
                         </Item.Content>
                       </Item>


                       <Item>
                         <Item.Image size='small' src={ghanahealth} />

                         <Item.Content>
                           <Item.Header as='a'  style={{color:'white'}}>Esikado Government Hospital</Item.Header>
                             <Item.Meta>
                                <span style={{color:'#FFB800'}}>Intern,  June - September 2019</span>
                              </Item.Meta>
                           <Item.Description style={{color:'white'}}>

                              <p>Worked as a data entry assistant. Using Microsoft Excel for data analysis and information processing. Filing of
                                 patients folder and assisting at the OPD Service. Arranging and Cleaning up folder shelfs and
                                reporting daily cases.
                              </p>

                           </Item.Description>
                         </Item.Content>
                       </Item>

                       <Item>
                         <Item.Image size='small' src={phoenix} />

                         <Item.Content>
                           <Item.Header as='a' style={{color:'white'}}>Phoenix Tech. Solutions</Item.Header>
                             <Item.Meta>
                                <span style={{color:'#FFB800'}}>Software Developer,  June 2018 - Present</span>
                              </Item.Meta>
                           <Item.Description style={{color:'white'}}>

                              <p>Working with Phoenix Software Solutions as a software developer to create tools the define  the future of Africa, I mostly work with React and Django to transform Ideas into Products.
                              </p>

                           </Item.Description>
                         </Item.Content>
                       </Item>

                      </Item.Group>

                    </Grid.Column>
                </Container>
            </Grid>
        </Container>
        </TransitionablePortal>
      )
  }
}

export default PortFolio;

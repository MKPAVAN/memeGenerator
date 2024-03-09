import {Component} from 'react'

import {
  BgContainer,
  LoginForm,
  FormHeading,
  LabelText,
  InputElement,
  SelectElement,
  OptionElement,
  GenerateButton,
  MemeGeneratorContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImage: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    memeBackgroundImage: '',
    memeTopText: '',
    memeBottomText: '',
    memeFontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImage: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()
    const {backgroundImage, topText, bottomText, fontSize} = this.state
    this.setState({
      memeBackgroundImage: backgroundImage,
      memeTopText: topText,
      memeBottomText: bottomText,
      memeFontSize: fontSize,
    })
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      fontSize,
      memeBackgroundImage,
      memeFontSize,
      memeTopText,
      memeBottomText,
    } = this.state
    return (
      <BgContainer>
        <LoginForm onSubmit={this.generateMeme}>
          <FormHeading>Meme Generator</FormHeading>
          <LabelText htmlFor="imageUrl">Image Url</LabelText>
          <InputElement
            value={backgroundImage}
            id="imageUrl"
            placeholder="Enter the Image URL"
            onChange={this.onChangeImageUrl}
          />
          <LabelText htmlFor="topText">Top Text</LabelText>
          <InputElement
            value={topText}
            id="topText"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
          />
          <LabelText htmlFor="=bottomText">Bottom Text</LabelText>
          <InputElement
            value={bottomText}
            id="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />
          <LabelText htmlFor="select">Font Size</LabelText>
          <SelectElement
            value={fontSize}
            id="select"
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <OptionElement key={each.optionId} value={each.optionId}>
                {each.displayText}
              </OptionElement>
            ))}
          </SelectElement>
          <GenerateButton type="submit">Generate</GenerateButton>
        </LoginForm>

        <MemeGeneratorContainer data-testid="meme" bgUrl={memeBackgroundImage}>
          <TextContent fontSize={memeFontSize}>{memeTopText}</TextContent>
          <TextContent fontSize={memeFontSize}>{memeBottomText}</TextContent>
        </MemeGeneratorContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator

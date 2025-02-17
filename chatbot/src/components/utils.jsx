import moment from 'moment'

const analyze = (text) => {
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) 
        return `Hello, How Can I Help You?`
    else if (text.includes('date')) 
        return moment().format('MMMM Do YYYY')
    else if (text.includes('time')) 
        return moment().format('h:mm:ss a')
    else if (text.includes('your name')) 
        return `My Name is ChatBot`
    else if (text.includes('your age')) 
        return `I'm a Bot, I Don't Have Age`
    else if (text.includes('google link'))
        return `https://www.google.com/`
    else if (text.includes('youtube link'))
        return `https://www.youtube.com/`
    else if (text.includes('github link'))
        return `https://www.github.com/`
    else if (text.includes('bank interst rate'))
        return `The Interest Rate is 4%`
    else if (text.includes('weather'))
        return `The Weather is Cloudy`
    else if (text.includes('your location'))
        return `I'm a Bot, so i'm in internet`
    else if (text.includes('thank you') || text.includes('thanks'))
        return `bye, Have a Nice Day!`
    else if (text.includes('bye') || text.includes('goodbye'))
        return `Goodbye, Have a Nice Day!`
    else if (text.includes('how are you'))
        return `I'm Fine, Thank You!`
    else if (text.includes('your creator'))
        return `I was Created by Mahesh`
    else if (text.includes('your purpose'))
        return `I'm Created to Help You!`
    else if (text.includes('buy me some things'))
        return `I'm Sorry, I Can't Help You!`
    else if (text.includes(''))
        return `Pls Enter Something`

  return `I can't get you. Can You Please Rephrase the message?`
  
}

export default analyze
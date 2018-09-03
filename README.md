[ergo](http://ergo.liquidthink.net)

![Ergo Screenshot](https://i.imgur.com/XpnB62e.png)

A light, simple beautiful Gutenberg theme made with a focus on writing. Inspired by sbvtle and Pixyll.


Like both those web designs, Ergo is a theme that emphasizes content, but still tries to be stylish. Frankly, the design is
most like sbvtle (http://sbvtle.com) but without the Javascript, community or kudos button.
If you find that you like all those things, please check out [svbtle](http://svbtle.com); this theme is meant as a lighter (free) alternative,
and ergo's design will most likely diverge more in the future as this theme evolves with me and it's users.
This is not meant as a svbtle clone.


WIP: Screencast of the entire creation process of ergo.

##  features
- NoJS. I'm not actually sure if this is really a feature, but I was surprised what I was able to accomplish with just CSS3.
- Fonts that are easy on the eyes
- easy theme customization (sass/vars.scss for all site colors)

## Installation
Get [Gutenberg](https://www.getgutenberg.io/) and/or follow their guide on [installing a theme](https://www.getgutenberg.io/documentation/themes/installing-and-using-themes/).
Make sure to add `theme = "ergo"` to your `config.toml`

#### Check gutenberg version (only 0.4.1+)
Just to double-check to make sure you have the right version. It is not supported to use this theme with a version under 0.4.1.

### how to serve
go into your sites directory, and type `gutenberg serve`. You should see your new site at `localhost:1111`.

### Deployment to Github Pages or Netlify
[Gutenberg](https://www.getgutenberg.io) already has great documentation for deploying to [Netlify](https://www.getgutenberg.io/documentation/deployment/netlify/) or [Github Pages](https://www.getgutenberg.io/documentation/deployment/github-pages/)

### Customizing the Theme
All colors used on the site are from `sass/vars.scss`. There's only about 5-6 colors total.
Change them however you like! Feel free to go into theme and edit the colors. However, editing anything other than `sass/colors.scss` is strongly advised against. Continue at your own peril!

#### Theme Options
```toml
# Specify a profile picture to use for the logos in the theme. It can be svg, png, jpg, whatever, just make sure to copy the logo you want and put it in img/${YOUR_PROFILE}.*
# and update your config.toml accordingly
profile = 'profile.svg'

# website, should not be preceded with `http://`
website = "code.liquidthink.net"

# github
github = "InsidiousMind" # case does not matter
# twitter
twitter = "liquid_think"
# email
email = "${MY_EMAIL}@cool_domain.com"
# instagram
instagram = "${your_insta}"
# youtube
youtube = "${your_youtube_channel_id}"
# if any social networks are missing from this list that you want added, open an issue. I will add it for you ASAP
```

## Features
  - [ ] Dynamic Color Schemes
  - [ ] Edit Colors in `config.toml`
  - [x] NoJS
  - [ ] Analytics
  - [ ] Comments?
  - [ ] Like button http://kudosplease.com/
  - [ ] categories?
  - [ ] related posts? (would meaningful related posts, or unmeaningful ones, be worth it w/o database?)
  - [ ] user-requested: Open a Issue, or, if you're feeling up to it, a Pull Request

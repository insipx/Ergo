+++
title="Writing Telegram bot on Rust"
date=2020-09-02
category="thoughts"
+++

## Writing Telegram bot is simple
Here we go, I decide to write Telegram bot on Rust. The aim of the bot is pretty simple, and I spied it from JProf
community channel: parsing all user messages and when met Rust word - response with Rust sticker into a channel and counting time from the latest mention.

## Intro into Telegram API
How to start develop Telegram bot? With this question I go to the Internet and found out reach description on official
Telegram site with description of Bot API: [Bots: An introduction for developers](https://core.telegram.org/bots).

## Choosing Rust Telegram Lib
It was a simple decision - I just gone to the crates.io and try to find any mention of telegram. The most used was library:
[Rust Telegram Bot Library: telegram-bot](https://crates.io/crates/telegram-bot). It has pretty reach readmi with simple
example.

## Creating bot project
I was surprised by simplicity of telegram-bot creation, that help to build simple telegram bot just in several lines. Fortunately, the logic is very simple for start - just recognize 'Rust' keywords and response some message into channel. [My Telegram Bot Repo](https://github.com/nolik/rust-by-bot)

## CI / CD
Additionally, I found very useful Github Actions for Rust that cover all basic continuous integration features + have suitable integration with Heroku that used like a hosting for bot: [Rust Github Action](https://github.com/marketplace/actions/rust-action)

## In the plans
As far I use Heroku Free Dyno Usage and for now I deploy app like a worker. As far I store state in memory - I lose it with each redeploy. I'm planning to add some persistent storage and try to use the most popular one for Rust: [Diesel ORM](http://diesel.rs/)
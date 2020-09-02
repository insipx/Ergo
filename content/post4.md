+++
title="Writing Telegram bot on Rust"
date=2020-09-02
category="thoughts"
+++

## Writing Telegram bot is simple
Here we go, I decide to write Telegram bot on Rust. The aim of the bot is pretty simple and I spied it from JProf
community channel: parsing all user messages and when met Rust word - response with Rust sticker into channel and count
time from the latest mention about Rust.

## Intro into Telegram API
How to start develop Telegram bot? With this question I go to the Internet and found out reach description on official
Telegram site with description of Bot API: [Bots: An introduction for developers](https://core.telegram.org/bots).

## Choosing Rust Telegram Lib
It was a simple decision - I just gone to the crates.io and try to find any mention of telegram. The most used was library:
[Rust Telegram Bot Library: telegram-bot](https://crates.io/crates/telegram-bot). It has pretty reach readmi with simple
example.

## Creating bot project
And I start to develop: [My Telegram Bot Repo](https://github.com/nolik/rust-by-bot)
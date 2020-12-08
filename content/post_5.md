+++
title="Kafka vs Pulsar - why we should be skeptical about benchmarks"
date=2020-11-12
category="thoughts"
+++

## The Real Aim of Benchmarks
Comparison benchmarks in IT industry it's not the only way to prove some metric supremacy of some tech/frameworks, but also a way to promote your technology. The last point is often interested in vendors and companies providing consulting services. By myself, from time to time I check [Web Framework Benchmarks](https://www.techempower.com/benchmarks) to see how freaking fast Rust frameworks like Actix in comparison to more adopted web frameworks writen on other languages.

## Kafka supremacy
As usually I wasn't surprised to see some benchmark of Kafka that's lead over competitors in real-time streaming, especially if this article was provided by Confluent:
[Benchmarking Apache Kafka, Apache Pulsar, and RabbitMQ: Which is the Fastest?](https://www.confluent.io/blog/kafka-fastest-messaging-system/)

## The ~Empire~ Pulsar Strikes Back
I was pleasantly surprised by the guys who are developing Pulsar and who gave a decent answer:
[Benchmarking Pulsar and Kafka - A More Accurate Perspective on Pulsar’s Performance](https://streamnative.io/blog/tech/2020-11-09-benchmark-pulsar-kafka-performance) 

## Why you should be sceptical about Benchmarks
1. Methodology - each benchmark use own methodology that often doesn't represent all side of compared technologies that put technologies into non-competitive environment.
2. Expertise in one technology and incompetence in others - as a result, we are able to see benchmarks, where compared competitive technology, could be not correctly set up/ not properly used in some cases.
3. Wishful thinking - results of benchmarks could be interpreted wrongly with desire put one technology into better position to other.
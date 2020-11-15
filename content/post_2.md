+++
title="The Cold War is in full swing! Who'll be the leader among Java Cloud Native Frameworks?>"
date=2020-06-07
category="thoughts"
+++

With the coming  of the new era of cloud native services, the size of image dockers for applications that included
JDK caused a slight puzzlement. The huge JDK in our Docker containers is just the tip of the problem (which can be
solved by the jigsaw project though). The real problem is what made Java so successful - its virtual machine, which we
also have to run in containers (Mostly HotSpot VM).

## Go language as an irritant
The emergence of a new language with new advantages exposed already known problems. The emergence of a new language with
 new advantages exposed to already known problems. Really small microservices with fast startup written on the Go
 language made a real competition to microservices written on Java.

 ## GraalVM -> new stage of java infrastructure evolution
 Oracle Corporation has bet on a new virtual machine GraalVM. Its idea lies in 2 key features: a polyglot virtual
 machine not only for JVM languages and cloud native java images.

 ## Online meetup about GraalVM and Cloud Native Frameworks
[Godel Java Meetup: New era of Subatomic Cloud Native Frameworks (Rus)](https://web.microsoftstream.com/video/69ff627e-c9a4-4cf3-a80b-69c4d242a4e0)

## A month later...
A month after my presentation with the analysis of the most popular Java frameworks: Quarkus, Micronaut, Helidon. The
world was erupted with new news in this direction.

## Spring tries to get back into the cage.
[2020-06-10 The path towards Spring Boot native applications](https://spring.io/blog/2020/06/10/the-path-towards-spring-boot-native-applications)

## Oracle announced Helidon 2.0
[2020-05-25 Helidon 2.0 is out](https://twitter.com/oraclelabs/status/1278768631158013956?s=19)
Helidon MP finally supports GraalVM native-images!

## Next step with Micronaut 2.0
[2020-06-26 Micronaut 2.0 was released](https://micronaut.io/blog/2020-06-26-announcing-micronaut-20.html)
The most important updates:
- Micronaut 2.0 now supports Java 14 and also adds support for Groovy 3.
- Micronaut 2.0 comes with improvements in all metrics, with startup times improving by 20% on average.
- Micronaut 2.0 introduces support for writing applications that can be deployed to Google's upcoming Cloud Function
- support for Java And Azure Function. Also was announced support for AWS SDK 2.
- Support for HTTP/2 has been added and can be optionally enabled in both the Netty-based HTTP server and client.

## Try to establish a community with Micronaut Foundation around Object Computing
[2020-06-29 Creation of Micronaut Foundation](https://micronaut.io/blog/2020-06-26-announcing-micronaut-20.html)


## One of the main Micronaut contributors leaves to Oracle
[2020-07-02 Graeme Rocher will work on project Helidon by Oracle](https://micronaut.io/blog/2020-06-26-announcing-micronaut-20.html)

## Red Hat announced GraalVM fork
[2020-07-05 A community distribution of GraalVM for the Red Hat build of Quarkus](https://micronaut.io/blog/2020-06-26-announcing-micronaut-20.html)

## Thus, we see how frameworks of the new generation actively develop and compete for supremacy.
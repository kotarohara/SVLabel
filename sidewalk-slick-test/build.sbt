name := """hello-slick-2.1"""

version := "1.0"

scalaVersion := "2.11.1"

mainClass in Compile := Some("HelloSlick")

libraryDependencies ++= List(
  "com.typesafe.slick" %% "slick" % "2.1.0",
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "com.h2database" % "h2" % "1.3.175",
  "mysql" % "mysql-connector-java" % "5.1.34",
  "org.scalatest" %% "scalatest" % "2.1.6" % "test",
  "joda-time" % "joda-time" % "2.4",
  "org.joda" % "joda-convert" % "1.6",
  "com.github.tototoshi" %% "slick-joda-mapper" % "1.2.0"
)

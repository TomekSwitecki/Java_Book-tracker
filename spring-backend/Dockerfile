FROM eclipse-temurin:21-jre
LABEL authors="ttwit"
COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

#docker run --env-file .env -p 8080:8081 booktracker-backend
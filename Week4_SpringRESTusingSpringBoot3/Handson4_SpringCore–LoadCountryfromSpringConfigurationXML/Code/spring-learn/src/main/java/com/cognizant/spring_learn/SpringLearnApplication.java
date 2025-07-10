package com.cognizant.spring_learn;



import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.debug("START");

        SpringApplication app = new SpringApplication(SpringLearnApplication.class);
        app.setWebApplicationType(org.springframework.boot.WebApplicationType.NONE);
        app.run(args);

        displayCountry();

        LOGGER.debug("END");
    }

    public static void displayCountry() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        LOGGER.debug("Country : {}", country.toString());
    }
}

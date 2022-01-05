package com.asos.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        features = ".",
        plugin = {"pretty","html:target/cucumber-report"},
        glue = {"classpath:com.asos"},
        dryRun = false

)

public class Runner {
}

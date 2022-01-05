package com.asos.cucumber.steps;

import com.asos.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^user is on the Asos home page$")
    public void userIsOnTheAsosHomePage() {
    }

    @When("^user click on the Women Option on the homepage$")
    public void userClickOnTheWomenOptionOnTheHomepage() {
        new HomePage().userShouldAbleToClickOnWomenOption();
    }

    @Then("^user is on the Women Page$")
    public void userIsOnTheWomenPage() {
    }
}

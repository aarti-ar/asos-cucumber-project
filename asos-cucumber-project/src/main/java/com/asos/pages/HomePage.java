package com.asos.pages;

import com.asos.utility.Util;
import org.openqa.selenium.By;

public class HomePage extends Util {

    By women= By.xpath("//a[@id='women-floor']");

    public void userShouldAbleToClickOnWomenOption(){
        clickOnElement(women);

    }
}

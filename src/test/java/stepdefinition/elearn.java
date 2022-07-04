package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.Hook;
import junit.framework.Assert;

public class elearn {
	WebDriver driver = Hook.driver;
	@Given("User is on homepage")
	public void user_is_on_homepage() {
	    driver.get("http://elearningm1.upskills.in/index.php");
	}

	@When("user enter invalid Username {string} and password {string}")
	public void user_enter_invalid_Username_and_password(String username, String pass) {
		driver.findElement(By.id("login")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(pass);
		driver.findElement(By.name("submitAuth")).click();
		
	}

	@Then("validation message appears")
	public void validation_message_appears() {
	    WebElement ele = driver.findElement(By.cssSelector("div.alert.alert-danger"));
	    Assert.assertNotNull(ele);
	}

	@When("user enter valid Username {string} and password {string}")
	public void user_enter_valid_Username_and_password(String username, String pass) {
		driver.findElement(By.id("login")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(pass);
		driver.findElement(By.name("submitAuth")).click();
	}
	
	@Then("welcome page appears")
	public void welcome_page_appears() {
		WebElement ele = driver.findElement(By.xpath("//*[contains(text(),'Hello')]"));
		Assert.assertNotNull(ele);
	}



}

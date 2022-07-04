package ElearningProject.ElearnCucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class elearn {
	@Test(priority=2)
	public void testcase(){
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/");
		
		driver.findElement(By.linkText("Sign up!")).click();
		driver.findElement(By.name("firstname")).sendKeys("Abhi");
		driver.findElement(By.name("lastname")).sendKeys("Shek");
		driver.findElement(By.name("email")).sendKeys("Abhi@shek.com");
		driver.findElement(By.name("username")).sendKeys("Abhi123456");
		driver.findElement(By.name("pass1")).sendKeys("Abhi@123");
		driver.findElement(By.name("pass2")).sendKeys("Abhi@123");
		driver.findElement(By.name("submit")).click();
		driver.findElement(By.id("logout_button")).click();
	}

}

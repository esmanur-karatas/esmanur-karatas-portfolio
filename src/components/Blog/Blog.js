import React from 'react';
import './Blog.css';


const blogPosts = [
  {
    title: "1. What is Manual Software Testing?",
    desc: "Let’s say you're building an e-commerce site and there's an 'Add to Cart' button. The developer implements this button...",
    url: "https://medium.com/@esmanurkaratas0/manuel-yaz%C4%B1l%C4%B1m-testi-nedir-a1d77d1f7f00",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OjMqTzz29NE5Ib-H.png"
  },
  {
    title: "2. Software Development Lifecycle Models",
    desc: "Managing the software development process is a crucial topic in the software world. In this post, we explore process models...",
    url: "https://medium.com/@esmanurkaratas0/yazilim-geli%CC%87%C5%9Fti%CC%87rme-s%C3%BCre%C3%A7-modelleri%CC%87-3d6f4710773b",
    image: "https://miro.medium.com/v2/resize:fit:1076/format:webp/1*g66hjj2YX22UZbbe2iQMaw.png"
  },
  {
    title: "3. Using Kanban Board in Software Testing Processes",
    desc: "To improve software quality, detect bugs early, and efficiently manage the testing process, we explore using a Kanban board...",
    url: "https://medium.com/@esmanurkaratas0/yaz%C4%B1l%C4%B1m-test-s%C3%BCre%C3%A7lerinde-kanban-panosu-4b793ff9e11b",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Gtnl3SbVQVpy_IavPPffbQ.png"
  },
  {
    title: "4. Introduction to Selenium: Creating a Project with Maven & POM.xml",
    desc: "Learn how to start a Selenium project, configure with Maven, and write basic test scripts in this step-by-step guide...",
    url: "https://medium.com/@esmanurkaratas0/selenium-i%CC%87le-proje-olu%C5%9Fturma-pom-xml-ba%C4%9F%C4%B1ml%C4%B1l%C4%B1klar-dd34070b9d89",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k5PCia4vzB4tSx_8d7ED0A.png"
  },
  {
    title: "5. What Are Selenium WebDriver Get() Methods?",
    desc: "We explain what the get() method in Selenium WebDriver does and how to use it with simple examples...",
    url: "https://medium.com/@esmanurkaratas0/selenium-webdriver-get-metodlar%C4%B1-nelerdir-99229de20be9",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*a6MfqBIeUHyYUGb-5NGfJA.png"
  },
  {
    title: "6. Selenium's navigate().to() and Other Navigation Methods",
    desc: "We demonstrate how to perform page navigation in Selenium using methods like navigate().to() with practical examples...",
    url: "https://medium.com/@esmanurkaratas0/seleniumda-navigate-to-ve-di%C4%9Fer-navigasyon-metotlar%C4%B1-9fb51aba74fa",
    image: "https://i.ytimg.com/vi/OvKeHR7GxbU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAi6ugu7kRdRLD1bHusd9F4bTE-3Q"
  },
  {
    title: "7. Using Locators in Selenium",
    desc: "We explain how to find and interact with web elements using locators in Selenium, with clear examples...",
    url: "https://medium.com/@esmanurkaratas0/seleniumda-locator-kullan%C4%B1m%C4%B1-2f3c00173605",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0OScX1bssSbn1uss0vb_TA.png"
  },
  {
    title: "8. Basic Selenium Test: Saucedemo Login",
    desc: "Learn how to test a basic user login flow with Selenium through a practical example on the Saucedemo site...",
    url: "https://medium.com/@esmanurkaratas0/temel-selenium-testi-saucedemo-login-testi-113787d98f2c",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*lLitsUKM857YTZ0CG8C2gA.png"
  },
  {
    title: "9. Using Radio Buttons and Checkboxes in Selenium",
    desc: "We cover how to interact with radio buttons and checkboxes in test automation using Selenium, step-by-step...",
    url: "https://medium.com/@esmanurkaratas0/selenium-ile-radio-button-ve-checkbox-kullan%C4%B1m%C4%B1-ee0453985a7c",
    image: "https://i.ytimg.com/vi/0_rBSHHS9ZU/hqdefault.jpg"
  },
  {
    title: "10. Testing Dropdown Menus in Selenium",
    desc: "We explain how to test dropdown menus in Selenium with hands-on examples...",
    url: "https://medium.com/@esmanurkaratas0/selenium-ile-dropdown-men%C3%BClerini-test-etme-3b1df0ab7bcc",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*n2rCtW-sOOoYtIcI28iF4Q.jpeg"
  },
  {
  title: "11. What is a Selenium Alert? Handling Alerts in Java",
  desc: "We explain how to manage alert boxes using Java with Selenium, including all related methods...",
  url: "https://medium.com/@esmanurkaratas0/selenium-alert-nedir-java-ile-alert-handle-etme-accept-dismiss-prompt-bf8f53471fea",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MZLILPa4F1OXn1kU_1NDTQ.jpeg"
},
{
  title: "12. Using iFrames in Selenium: NASA Example",
  desc: "We demonstrate how to access content inside iframes using Selenium with a real example from NASA's website...",
  url: "https://medium.com/@esmanurkaratas0/selenium-ile-iframe-kullan%C4%B1m%C4%B1-nasa-sitesi-%C3%BCzerinden-ger%C3%A7ek-zamanl%C4%B1-%C3%B6rnek-4ac7c46952e3",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eNjxBJtsmxen0jY2zyaU3Q.jpeg"
},
{
  title: "13. Using WindowHandle in Selenium for Tab Control",
  desc: "What is WindowHandle? We explain in detail how to work with multiple browser tabs in Selenium...",
  url: "https://medium.com/@esmanurkaratas0/seleniumda-windowhandle-ile-sekme-kontrol%C3%BC-d06ac20ed95c",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oIwUONUh2-YTWeWPoYjjXw.jpeg"
},
{
  title: "14. Using WindowHandles in Selenium — NASA & NATO Example",
  desc: "We walk through the usage of WindowHandles in Selenium with real examples from NASA and NATO websites...",
  url: "https://medium.com/@esmanurkaratas0/seleniumda-windowhandles-kullan%C4%B1m%C4%B1-nasa-nato-%C3%B6rne%C4%9Fiyle-a13b27d063f8",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y_nywPHMWqArfYnKwC1Cdw.jpeg"
},
{
  title: "15. Selenium Keyboard Actions | TAB, CTRL, ENTER",
  desc: "We explore how to use keyboard interactions like TAB, ENTER, and CTRL+C/V in Selenium form automation...",
  url: "https://medium.com/@esmanurkaratas0/selenium-keyboard-actions-kullan%C4%B1m%C4%B1-tab-ctrl-c-v-enter-ile-form-otomasyonu-java-12a691dac869",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*BecYwjpP-JAcXBt5x6JDug.jpeg"
},
{
  title: "16. Selenium Mouse Actions in Detail",
  desc: "We explain mouse movements, drag-and-drop actions, and other interactions using Selenium in depth...",
  url: "https://medium.com/@esmanurkaratas0/selenium-mouse-actions-fare-aksiyonlar%C4%B1-detayl%C4%B1-kullan%C4%B1m%C4%B1-%C3%B6rneklerle-anlat%C4%B1m-db552beb6913",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*O8spo60EU0MrHS-XuGbnvQ.jpeg"
},
{
  title: "17. Uploading and Downloading Files with Selenium",
  desc: "We demonstrate file upload/download operations and explain the difference between user.home and user.dir in Java...",
  url: "https://medium.com/@esmanurkaratas0/selenium-ile-dosya-y%C3%BCkleme-ve-i%CC%87ndirme-upload-download-javada-user-home-c0087560de99",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*RYZjLvqQvODHDH3CXJ0zWg.jpeg"
},
{
  title: "18. Taking Screenshots in Selenium",
  desc: "We explain how to capture screenshots when tests fail and how to archive these images for debugging...",
  url: "https://medium.com/@esmanurkaratas0/selenium-ile-ekran-g%C3%B6r%C3%BCnt%C3%BCs%C3%BC-alma-screenshot-c9cb078a330d",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lq0iXiLDBtkPB2UnOz6rAQ.png"
},
{
  title: "19. Using JavaScriptExecutor in Selenium",
  desc: "What is JavaScriptExecutor? When and why do we use it? We explain using a real-world Trendyol example...",
  url: "https://medium.com/@esmanurkaratas0/selenium-javascriptexecutor-kullan%C4%B1m%C4%B1-40a284e554c8",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WYWW5wuCB8hFco2o-f5anw.png"
},
{
  title: "20. Testing Modal Dialogs (Popups) in Selenium",
  desc: "We show how to test modal dialog boxes using Selenium with a live Trendyol popup example...",
  url: "https://medium.com/@esmanurkaratas0/selenium-ile-modal-dialog-a%C3%A7%C4%B1l%C4%B1r-pencere-testi-61597c5c8f6e",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*vKLqwP4V5d_huOp1nOGgsw.jpeg"
},
{
  title: "21. Testing Dynamic Content in Selenium",
  desc: "We demonstrate wait strategies and how to test dynamic elements efficiently with Selenium...",
  url: "https://medium.com/@esmanurkaratas0/selenium-ile-dinamik-i%CC%87%C3%A7erik-testi-7429cb3b33e1",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SprLMYyyI_QT_PT-BvoDMA.jpeg"
},
{
  title: "22. What is TestNG? What Is It Used For?",
  desc: "We explore the benefits and setup process of the TestNG framework, widely used in Java-based test automation...",
  url: "https://medium.com/@esmanurkaratas0/testng-nedir-ne-i%CC%87%C5%9Fe-yarar-3466fb956684",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*S7f3sW3tmFc6U0rVVl_o8g.jpeg"
},
{
  title: "23. Selenium Project Structure & Maven POM Review",
  desc: "We analyze the ideal project structure for a robust Selenium framework and how to configure Maven's POM file...",
  url: "https://medium.com/@esmanurkaratas0/selenium-proje-yap%C4%B1s%C4%B1-ve-maven-pom-dosyas%C4%B1n%C4%B1n-derinlemesine-i%CC%87ncelenmesi-5717622f023e",
  image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bX-HSYIyKQ8K2OzvKMAI_w.png"
}

];


const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">My Blog Posts</h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="image-wrapper">
              <img src={post.image} alt={post.title}  />
            </div>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-link"
            >
              Read Article →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

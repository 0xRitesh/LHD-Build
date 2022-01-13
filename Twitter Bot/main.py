from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

def acc_info():
    with open("acc_info.txt", "r") as f:
        info = f.read().split()
        email = info[0]
        password = info[1]
        username = info[2]

    return email, password, username


def main():
    email, password, username = acc_info()
    msg = "Hello, world!!!!!!!!!"

    options = Options()
    options.add_argument("start-maximized")
    driver = webdriver.Chrome(options=options)

    driver.get("https://twitter.com/login")

    email_xpath = '//*[@id="layers"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[5]/label/div/div[2]/div/input'
    next_btn_xpath = '//*[@id="layers"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[6]'
    pwd_xpath = '//*[@id="layers"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[3]/div/label/div/div[2]/div[1]/input'
    password_next_btn_xpath = '//*[@id="layers"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div'
    msg_xpath = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div[2]/div/div/div/div'
    tweet_btn_xpath = '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div/div[2]/div[3]/div/div/div[2]/div[3]'

    time.sleep(2)

    driver.find_element(By.XPATH, email_xpath).send_keys(email)
    time.sleep(2)

    driver.find_element(By.XPATH, next_btn_xpath).click()
    time.sleep(1)

    if (driver.current_url == "https://twitter.com/i/flow/login"):
        driver.find_element(By.TAG_NAME, "input").send_keys(username)
        time.sleep(2.1)
        driver.find_element(By.XPATH, '//*[@id="layers"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div').click()
        time.sleep(4)

    driver.find_element(By.XPATH, pwd_xpath).send_keys(password)
    time.sleep(0.9)

    driver.find_element(By.XPATH, password_next_btn_xpath).click()
    time.sleep(1.3)

    driver.find_element(By.XPATH, msg_xpath).send_keys(msg)
    time.sleep(0.5)

    driver.find_element(By.XPATH, tweet_btn_xpath).click()
    time.sleep(3600)


if __name__ == "__main__":
    main()


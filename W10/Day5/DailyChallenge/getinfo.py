from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import json


def get_currency_info():
    url = "https://www.exchangerate-api.com/docs/supported-currencies"
    xpath = "/html/body/div[2]/section/div/div[2]/div/article/div/table[3]/tbody/tr"

    options = Options()
    options.headless = True
    driver = webdriver.Chrome(options=options)

    driver.get(url)

    rows = driver.find_elements(By.XPATH, xpath)[1:]  # Ignore the first row
    currency_info = {}

    for row in rows:
        tds = row.find_elements(By.TAG_NAME, 'td')
        key = tds[0].text
        value = tds[1].text
        currency_info[key] = value

    driver.quit()

    return currency_info

def save_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f)

currency_info = get_currency_info()
save_to_json(currency_info, 'currency_info.json')
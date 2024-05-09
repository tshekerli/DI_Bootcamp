from dotenv import load_dotenv
from pyowm.owm import OWM

load_dotenv() 

import os 
apikey = os.getenv('API_KEY')
from pyowm import OWM
from pyowm.utils import config
from pyowm.utils import timestamps
logo = r"""
 __          __           _    _                             _____   _____  
 \ \        / /          | |  | |                     /\    |  __ \ |  __ \ 
  \ \  /\  / /___   __ _ | |_ | |__    ___  _ __     /  \   | |__) || |__) |
   \ \/  \/ // _ \ / _` || __|| '_ \  / _ \| '__|   / /\ \  |  ___/ |  ___/ 
    \  /\  /|  __/| (_| || |_ | | | ||  __/| |     / ____ \ | |     | |     
     \/  \/  \___| \__,_| \__||_| |_| \___||_|    /_/    \_\|_|     |_|     
                                                                            

"""


owm = OWM(api_key=apikey)
mgr = owm.weather_manager()

observation = mgr.weather_at_place('Baku')

w = observation.weather
print(w.detailed_status)
three_h_forecaster = mgr.forecast_at_place('Berlin,DE', '3h')
print(three_h_forecaster.())
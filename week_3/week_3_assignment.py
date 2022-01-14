import urllib.request as req
import json

data_url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"

with req.urlopen(data_url) as raw:
    raw_data = json.load(raw)
    
data = raw_data["result"]["results"]

#景點名稱,區域,經度,緯度,第一張圖檔網址

list_result = []

for x in range(len(data)) :
    list_result.append(
                        [
                            data[x]['stitle'], 
                            data[x]['address'][5:8], 
                            data[x]['longitude'], 
                            data[x]['latitude'], 
                            "https" + data[x]['file'].split('https')[1]
                        ]
                        )

import csv

with open('data.csv', 'w',encoding="UTF-8", newline='') as check:
    writer = csv.writer(check)
    writer.writerow(["景點名稱", "區域", "經度", "緯度", "第一張圖檔網址"])
    for row in list_result:
        writer.writerow(row)
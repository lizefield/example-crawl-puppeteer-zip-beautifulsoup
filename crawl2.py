import os
import zipfile
from bs4 import BeautifulSoup
import unicodedata

dir = 'output'
archive = zipfile.ZipFile(os.path.join(dir, 'example.zip'))
bodyHTML = archive.read('example.txt')

soup = BeautifulSoup(bodyHTML, 'html.parser')
print(soup.text)
normalized = unicodedata.normalize('NFKC', soup.text)
print(normalized)

phone = '050-1234-５６７８'
print(phone)
after = unicodedata.normalize('NFKC', phone)
print(after)

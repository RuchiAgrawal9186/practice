import xml.etree.ElementTree as ET

# Parse the XML file
tree = ET.parse('h:/practice/100DaysLearning/Day_24_XML_Python/employee.xml')
root = tree.getroot()

# Define the namespace
ns = {'emp': 'https://www.example.com/employee'}

# Loop through all employee elements
for emp in root.findall('emp:employee', ns):
    name = emp.find('emp:name', ns).text
    age = emp.find('emp:age', ns).text
    email = emp.find('emp:email', ns).text
    gender = emp.find('emp:gender', ns).text
    phone = emp.find('emp:phone', ns).text
    cityAddress = emp.find('emp:cityAddress', ns).text
    status = emp.get('status')

    print(f'{name} | {age} | {email} | {gender} | {phone} | {cityAddress} | {status}')
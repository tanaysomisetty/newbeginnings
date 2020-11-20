# Python code to demonstrate table creation and  
# insertions with SQL 
  
# importing module 
import sqlite3 
  
# connecting to the database  
connection = sqlite3.connect("myTable.db") 
  
# cursor  
crsr = connection.cursor() 
  
# SQL command to create a table in the database 

tableString = """CREATE TABLE IF NOT EXISTS employers (  
employer_name VARCHAR(30) PRIMARY KEY,  
fieldOfWork VARCHAR(20),  
jobType VARCHAR(30),  
linktoWebsite VARCHAR(30)   );"""

tableString2 = """CREATE TABLE IF NOT EXISTS mentors (  
name VARCHAR(30) PRIMARY KEY,  
contact_information VARCHAR(20),  
field VARCHAR(30),  
linktoPhoto VARCHAR(30),
Interests VARCHAR(30) );"""

# execute the statement 
crsr.execute(tableString) 

crsr.execute(tableString2)

# SQL command to insert the data in the table 


def insertIntoEmployersTable(name, field, jobType, WebsiteLink):
    row = """INSERT OR IGNORE INTO employers
             VALUES (?,?,?,?) """
    
    recordTuple = (name, field, jobType, WebsiteLink)
    
    crsr.execute(row, recordTuple)

def insertIntoMentorsTable(name, info,field,linktoPhoto,interests):
    row = """INSERT OR IGNORE INTO mentors
             VALUES (?,?,?,?,?) """
             
    recordTuple = (name, info,field,linktoPhoto,interests)
    
    crsr.execute(row,recordTuple)
    
    
def query(tableName):
    # execute the command to fetch all the data from the tabl 
    crsr.execute("SELECT * FROM " + tableName)


    # store all the fetched data in the ans variable 
    ans = crsr.fetchall()  

    print(ans)
    
  
row = """INSERT OR IGNORE INTO employers VALUES("Apple", "CS", "Full Time", "https://www.apple.com/jobs/us/");"""
crsr.execute(row)
  
# another SQL command to insert the data in the table 

row = """INSERT OR IGNORE INTO employers VALUES("IBM", "CS", "Part_Time", "https://www.ibm.com/us-en/employment");"""
crsr.execute(row)

insertIntoEmployersTable("Saturn", "CS", "INTERN", "SATURNSYSTEMS.com")

insertIntoEmployersTable("Amazon", "CS", "Full_Time","Amazon.com/careers")


row = """INSERT OR IGNORE INTO mentors VALUES("Bob" , "bob@gmail.com", "IT", "Instagram.com/bob" , "Skiing, Hiking, Traveling" );"""
crsr.execute(row)


insertIntoMentorsTable("Rithik","Rithik@gmail.com","English","Instagram.com/Rithik","Gaming, Running, Guitar")
query("employers")

query("mentors")
# To save the changes in the files. Never skip this.  
# If we skip this, nothing will be saved in the database. 
connection.commit() 
  
# close the connection 
connection.close() 
import sys
import sqlite3 as lite
import re
import string

f = open('pokelist.txt' , 'r')

pokelist = [x.split() for x in f.readlines()]

pattern = re.compile('[\W_]+')

pokelist = [[int(x[0]), pattern.sub('', x[1])] for x in pokelist]

poketuple = tuple((k[0], k[1]) for k in pokelist)

try:

    con = lite.connect('pokemon.db')

    with con:
        cur = con.cursor()
        cur.execute("DROP TABLE IF EXISTS Pokemon;")
        cur.execute("CREATE TABLE Pokemon(Id INT, Name TEXT)")
        cur.executemany("INSERT INTO Pokemon VALUES(?, ?)", poketuple)

    con.commit()

except lite.Error, e:

    if con:
        con.rollback()

    print "Error %s:" % e.args[0]
    sys.exit(1)

finally:

    if con:
        con.close()



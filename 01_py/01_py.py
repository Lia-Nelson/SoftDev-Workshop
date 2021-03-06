'''
Julia Nelson
SoftDev
K02A -- Print a SoftDev Student
2021-09-21
'''

import random
# allows random integer function to be used

pd1 = ["Julia Nelson", "Owen Yaggy", "Oscar Wang", "Angela Zhang",
       "Edwin Zheng", "Ella Kretchmer", "Ivan Lam", "Justin Morrill",
       "Naomi Naranjo", "Tina Nguyen", "Tami Takada", "Christopher Liu",
       "Lucas Lee", "Zhao Yu Lin", "Lucas Tom-Wong", "Rayat Roy", "Michelle Lo",
       "Theodore Fahey","Aryaman Gowenka", "Haotian Gan", "William Chen",
       "Aaron Contreras", "Shyne Cha", "Sadid Ethun", "Emma Buller",
       "Shriya Anand", "Reng Zheng", "Tomas Acuna", "Alejandro Alonso",
       "Deven Maheshwari", "Yusuf Elsharawy", "Ishiaq Mahid", "Gavin McGinley",
       "Ivan Mijacka"]
# defines pd1 as the list of names of the students in Mr. Mykolyk's period 1
# software development class
pd2 = ["Haotian Gan", "Raymond Yueng", "Kevin Cao", "Michelle Lo",
       "Christopher Liu", "Michael Borczuk", "Josephine Lee",
       "Alif Abdullah", "Justin Zou", "Andy Lin", "Rachel Xiao",
       "Andrew Juang", "Yuqing Qu", "Shadman Rakib", "Annabel Zhang",
       "David ASC20", "Liesel Wong", "Daniel Sooknanan",
       "Austin Ngan", "Thomas Yu", "Yaying Liang Li", "Jessie Xie",
       "Eric Guo", "Jonathan Wu", "Shriya Anand", "Noakai Aronesty",
       "Yoonah Chang", "Roshani Shrestha", "Qina Liu", "Han Zhang"
       ]
# defines pd2 as the list of names of the students in Mr. Mykolyk's period 2
# software development class

students = pd1 + pd2
# defines students as the list of names in both periods 1 and 2

index = random.randint(0, len(students)-1)
# defines index as a random index present in the list (indeces from 0 to one
# less than the length of the list)

print(students[index])
# prints the element/student name at that random index of the list

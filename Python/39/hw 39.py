months = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December']
days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
x = 0
for x, monthss in enumerate(months):
    print(monthss,  days_in_month[x])

months_tuple = ('January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December')
days_tuple = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
for d_tuple, m_tuple in zip(days_tuple, months_tuple):
    print(d_tuple, m_tuple)

months_dic = {'January': 31, 'February': 28, 'March': 31, 'April': 30, 'May': 31, 'June': 30,
              'July': 31, 'August': 31, 'September': 30, 'October': 31, 'November': 30, 'December': 31}
# print(months_dic)
for month, days in months_dic.items():
    print(month, " : ", days)

def how_many_days(month: str):
    days = 31
    if month in ['April', 'June', 'September', 'November']:
        days = 30
    if month in ['February']:
        days = 28
    return days
print('There are', how_many_days('July'), 'days in selected month')
print('There are', how_many_days('June'), 'days in selected month')


 
class Bank:
    def __init__(self, name):
        self.name = name

   #@staticmethod
    #def set_number ():  
            #self.account_number = 

account1 = Bank('John Doe') 
print(account1.name)      
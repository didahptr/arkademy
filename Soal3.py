mk = input('Masukkan Kata = ')

vokal = []
konsonan = []
index = 0
while index<len(mk):
    if '0' in mk:
        mk =a
    if mk[index] == 'a' or mk[index] == 'A' or mk[index] == 'u' or mk[index] == 'U' or mk[index] == 'i' or mk[index] == 'I' or mk[index] == 'e' or mk[index] == 'E' or mk[index] == 'o' or mk[index] == 'O' :
        vokal = vokal + [mk[index]]
    elif mk[index] != '' :
        konsonan = konsonan + [mk[index]]
    index = index + 1
print (str(vokal))
print (str(konsonan))

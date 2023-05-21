import cv2
import numpy
img=cv2.imread("qr-code.png")
print(type(img[0][0][0]))

# print('Array:\n', Array)
file = open("file2.txt", "w+")
 
# Saving the array in a text file
content = ""

for i in img:
    for r in i:
        if r[0]==0:
            content+='1'
        else:
            content+='0'
        content+' '
    content+='\n'
ans=""
# for i in img:
#     for r in i:
#         for j in r:
#             if j != 255:
#                 ans+=chr(j)
file.write(content)
file.close()
# coding=utf8
from scapy.all import *
data=open("lol.jpg",'rb').read()
send(IP(src="172.168.106.110",dst="192.168.106.104")/TCP(sport=3000,dport=80)/data,count=1)
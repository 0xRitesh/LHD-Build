
class bcolors:
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def encrypt(text,s):
    result = ""
 
    # traverse text
    for i in range(len(text)):
        char = text[i]
        if (char.isupper()):
            result += chr((ord(char) + s-65) % 26 + 65)
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)
    return result

def inputf():
    print(bcolors.WARNING +"Hii this is a  encrypter pls input ur sentence"+ bcolors.ENDC)
    input1=input(bcolors.BOLD+"Whats the Text?:"+ bcolors.ENDC).encode("utf-8")
    input2=input(bcolors.BOLD+"Whats the shift key?:"+ bcolors.ENDC).encode("utf-8")
    return [input1,input2]

def output(text,s):
    print(bcolors.OKCYAN +" Your Cipher is: " + encrypt(text,s)+ bcolors.ENDC)

def main():
    [i1,i2]=inputf()
    output(str(i1),int(i2))

main()
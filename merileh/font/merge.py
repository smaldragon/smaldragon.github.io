from PIL import Image
import glob

final = Image.new("RGBA",(10*16,10*16),color=(0,0,0,0))
files = glob.glob("*.png")
files.sort()
for i,filename in enumerate(files):
    if filename != "out.png":
        im=Image.open(filename)
        final.paste(im,box=((int(i%16)*10,int(i/16)*10)))
    
final.save("out.png")
OutputName=stdLib
SourceFiles=src/justAnExample.ts src/Text.ts src/colors.ts src/position.ts

BaseDir=../..
OutputDir=$(BaseDir)/js
Out=$(OutputDir)/$(OutputName).js

all: $(Out)

$(Out): lib.ts $(SourceFiles)
	tsc --removeComments --target es5 --declaration --sourceMap --out $@ lib.ts
	sed -i "/\/\/\/\ *<reference/d" $(OutputDir)/$(OutputName).d.ts #reused as source for other components
	cp -f $(OutputDir)/$(OutputName).d.ts ../declareFiles/

clean:
	rm $(OUT)

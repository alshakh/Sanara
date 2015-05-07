OutputName=coreLib
SourceFiles=src/Core.ts src/Fragment.ts src/Paper.ts
BaseDir=../..
OutputDir=$(BaseDir)/js
Out=$(OutputDir)/$(OutputName).js

all: $(Out)

$(Out): lib.ts $(SourceFiles)
	tsc --declaration --sourceMap --out $@ lib.ts
	sed -i "/\/\/\/\ *<reference/d" $(OutputDir)/$(OutputName).d.ts #reused as source for other components
	cp -f $(OutputDir)/$(OutputName).d.ts ../declareFiles/

clean:
	rm $(OUT)
